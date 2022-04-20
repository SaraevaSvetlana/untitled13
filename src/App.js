import './App.css';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {arr, friends, validationSchema} from "./constants/Constants";
import {Button, CardMedia, TextField} from "@material-ui/core";
import {useState} from "react";


function App() {
    const [inform, setInform] = useState(arr[0]);
    const [count, setCount] = useState(0)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur"
    });
    const inputProps = {
        margin: '20px',
    };
    const onSubmit = (data) => {
        console.log(arr[count].q.find(i => i === +data.title))
        if (arr[count].q.find(i => i === data.title)) {
            console.log(true);
            setCount(count + 1);
        }
        reset();
    }
    return (
        <>
            <h1>По следам "Во все тяжкие"</h1>

            <div className='d1'>
                {
                    arr[count].url.map((item, index) =>
                        <div className='right'>
                            <img src={item}/>
                        </div>
                    )
                }
            </div>
            <h2> {arr[count].content}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField className='form'
                           id="filled-basic"
                           label="Filled"
                           variant="outlined"
                           {...register('title')}
                           style={{
                               bgcolor: '#ffe',
                               color: 'white'
                           }}
                           fullWidth label=''
                           placeholder="Введи ответ"
                    // color="white"
                           inputProps={inputProps}
                />
                {/*<ErrorBlock>{errors?.url && <p>{errors?.url?.message || "Error!"}</p>}</ErrorBlock>*/}
                {/*<ErrorBlock>{isValidUrl || isValidTitle? <p>This photo is already in the album</p> : <p></p>}</ErrorBlock>*/}

                <Button type='submit'
                        variant='contained'
                        color='primary'
                > Ответить </Button>
            </form>


        </>
    );
}

export default App;
