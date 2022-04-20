import * as Yup from 'yup';
import f2 from "../Images/f2.jpg";
import f1 from "../Images/f1.jpg";

export const validationSchema = Yup.object().shape({
    // url: Yup.string()
    //     .required("This field is Required")
    //     .matches(
    //         /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //         'Enter correct url!'
    //     )

    // ,
    title: Yup.string()
        .required("This field is Required")
        .min(1, 'Must be exactly 1 character')
        .max(20, 'Must be exactly 100 character')
});

export const arr = [
    {
        title: 'По следам "Во все тяжкие"',
        content:"Начало :\n" +
            "Джесси: «Мистер Уайт, тебе не кажется, что Илья о нас забыл? Посмотри на него!» \n" +
            "Уолтер Уайт: «Мне не кажется. Я уверен, что это именно так!» Джесси: «Окзээээ, тогда ближайшие полчаса он проведёт с нами, не против, мистер Уайт?» \n" +
            "Уолтер Уайт: «Да легко! Я прихватил учебник по химии! Ему предстоит решить несколько уравнений, посмотрим на его лицо!!». ( Ха-ха-ха) \n" +
            "Джесси: «Да, кстити,чувак! Тебя  ждет много заданий!! И если ты  не хочешь , чтобы твой подарочек сгорел, тебе надо успеть решить все задачки!!!».\n"+
        "А теперь введи цифру 1 для продолжения",
        url:["https://images7.alphacoders.com/543/thumbbig-543509.webp"],
        q:['1']

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"Один большой почитатель сериала, наверное, такой же, как и ты, проехался по улочкам городка, чтобы лично найти те места, где побывали главные герои сериала. К реальным «декорациям» он прикладывал фото этого же места. Посмотри на фото. Вспомнишь ли ты название этого городка?\n" ,

        url:["https://www.thephoblographer.com/wp-content/uploads/2013/09/tumblr_ms3totEg2s1r92wm2o3_1280.jpg",
            'https://www.thephoblographer.com/wp-content/uploads/2013/09/tumblr_ms3totEg2s1r92wm2o1_1280.jpg',
            'https://www.thephoblographer.com/wp-content/uploads/2013/09/tumblr_ms3totEg2s1r92wm2o6_1280.jpg',
            'https://www.thephoblographer.com/wp-content/uploads/2013/09/tumblr_ms3totEg2s1r92wm2o5_1280.jpg'],
        q:['альбукерке','Альбукерке','Albukerke']

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"Создатель сериала «Во все тяжкие» Винс Гиллиган обратился к фанатам с просьбой перестать бросать пиццы на крышу дома в Альбукерке, штат Нью-Мексико, в котором по сюжету жил главный герой Уолтер Уайт. По его словам, семейная пара пенсионеров, которая в реальности живет в доме, уже привыкла к избыточному вниманию поклонников сериала, но жалуется на подобные действия. Бросая пиццу на крышу, фанаты повторяют действия Уайта: главный герой в припадке ярости поступил так в эпизоде «Безымянный конь» в третьем сезоне. Если ты уже вспомнил этот момент, то попробуй воскресить в памяти, с чем же была пицца, которая с первого и единственного дубля улетела на крышу дома?" ,

        url:['https://gif.cmtt.space/3/club/post-image/80/20/2caa4fdaa8.jpg'],
        q:['салями','пепперони',"пеперони"]

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"Пройдя предыдущий вопрос и, возможно, сидя в кафе в ожидании чая, тебе будет интересно узнать, что в одном из турецких городов существует кафе «Walters Coffee Roastery». Официанты в желтых костюмах и масках принесут тебе кофе прямо из лаборатории, не забыв про вкусный десерт в виде пирожных, декорированных «голубым метом». В заведении можно найти сосуды для варки кофе, напоминакющие колбы для химических опытов и гигантскую таблицу химических элементов на всю стену. В элементах зашифрованы имена создателей этого кафе. Ты уже догадался, что это за город?\n" ,

        url:['https://static.kulturologia.ru/files/u18046/Breaking-Bad-Cafe3.jpg',
            'https://static.kulturologia.ru/files/u18046/breaking-bad-coffee-shop-deniz-kosan-ist.jpg',
        'https://static.kulturologia.ru/files/u18046/180465420.jpg',
        'https://static.kulturologia.ru/files/u18046/180464785.jpg'],
        q:['Стамбул',"стамбул"]

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"какой вегетарианской вкусняшкой кормила Уолтера его жена Скайлер на завтраки, и что он упорно отказывался понимать и есть.? Первый сезон " ,

        url:['data:image/jpeg;base64,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'],
        q:['бекон',"Бекон","Беконом","беконом"]

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"После того, как я стал хранить у себя дома мешки с деньгами, мне пришлось поставить кодіна в дверь. Чтобы легко запомнить код от двери, я запомнил его так, типа котят  умножить на сосульки. сейчас я не врублюсь, что это может означать ))) что-то всплывает в моей голове... но могу вспомнить только то, что сумму чисел моего дня рождения  надо к чему-то прибавить.... Что это вще такое? Короче, я стою под домом целый час с больной башкой, и надежда только на вас ребят. помогите..... а то Уолтер уже ждет меня в Los Pollos, он меня убьет!.\n " ,

        url:[f1,"https://bigpicture.ru/wp-content/uploads/2012/10/Bad-bus-tour-7.jpg"],
        q:['237']

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"В фильме фигурирует существующий на самом деле сайт в помощь Уолтеру Уайту. Посмотри на фото. Какое слово скрыто. Вспомни или используй логику..\n" ,

        url:[f2],
        q:['учитель',"Учитель"]

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"Джесси Пинкмена: чувак, нам нужна твоя  помощь!!! Мы не можем связаться с Соулом Гудманом! В офисе его нет, на телефон он не отвечает, а часть наших денег хранится в его сейфе.  Нам  нужно получить эти деньги как можно быстрее. Где, черт побери, носит Соула ??? Как ты  знаешь, в экстремальных ситуациях Уолтер берет все в свои руки, мы пытаемся открыть сейф и нам требуется твоя  помощь. Мы знаем, что Соул  - твой  хороший друг!  Он еще тот ....человек, но с кем общаться и дружить дело твоё )) Так вот, мы знаем, что он использовал твои даты и номер телефонов в комбинации сейфа. Посчитай и скажи нам код!! Очень ждем.. год выхода сериала - год твой =........ \n" +
            "Это не все!\n" +
            "К тому, что получилось, необходимо добавить суммы 6 последних цифр в твоем  номере телефонов,. Теперь, вычитаем следом  сумму чисел твоего  дня рождения....что-то еще я хотел сказать забыл...а...прибавляем  это все к возрасту Уолтера Уайта на тот момент, когда он отмечал свой праздник в первом сезоне!\n" ,

        url:['https://www.zr.ru/d/story/ec/582892/201310140954-201310140954-898_no_copyright.jpg'],
        q:['80']

    },
    {
        title: 'По следам "Во все тяжкие"',
        content:"Поздравляем, ты добрался до закладки!!!!!!!!!!!!!!!! Ищи подарок здесь  ",

        url:['https://storage.vsemayki.ru/images/0/2/2780/2780105/previews/people_2_luggage_cover_front_white_250.jpg'],
        q:['80']

    }
]

