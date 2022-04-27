import './App.css';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {arr, validationSchema} from "./constants/Constants";
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";


function App() {

    const [count, setCount] = useState(0)
    const {
        register,
        handleSubmit,
        // formState: {},
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur"
    });
    // const inputProps = {
    //     margin: '20px',
    // };
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
                            <img src={item} alt='some value'/>
                        </div>
                    )
                }
            </div>
            <h2> {arr[count].content}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField className='form'
                           variant="outlined"
                           {...register('title')}
                           fullWidth label=''
                           placeholder="Введи ответ"
                    // color="white"
                    //        inputProps={inputProps}
                />


                <Button type='submit'
                        variant='contained'
                        color='primary'
                > Ответить </Button>
            </form>


        </>
    );
}

export default App;
