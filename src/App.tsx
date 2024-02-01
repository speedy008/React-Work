import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
import ExpandableComponent from "./components/ListGroup/ExpandableComponent";
const items = [
    {
        "cityname":"Ahemdabad",
        "type":"primary"
    },
    {
        "cityname":"kochi",
        "type":"secondary",
    },
    {
        "cityname":"Bangalore",
        "type":"success",
    },
    {
        "cityname":"Mumbai",
        "type":"danger",
    },
    {
        "cityname":"Baroda",
        "type":"warning",
    }
];

 function App(){

  return <p>
            <ExpandableComponent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In odio nisi, pariatur illo expedita nostrum est libero, modi nemo doloribus ex praesentium. Iure harum deserunt soluta nostrum velit quas animi! Eligendi odit dolore inventore aliquam et iste similique quidem, dignissimos doloribus, earum quia magni doloremque. Voluptatem omnis quaerat sequi modi, explicabo eligendi incidunt beatae. Fugit voluptate ea sit odio ex magni aspernatur quasi quam ullam debitis nesciunt asperiores provident dolore dolorem temporibus cupiditate molestias, voluptatem rem voluptates, natus et repellat? Harum, officia? Vel facilis, dignissimos id quia quos neque ex placeat accusamus corporis perferendis laudantium esse, doloremque magni, adipisci magnam dolores praesentium repudiandae quidem velit? Excepturi eveniet quaerat necessitatibus explicabo natus suscipit fugiat nihil sit error inventore autem, ex accusamus. A, illo perspiciatis nisi quos animi doloremque quibusdam sapiente, autem natus atque aut ad libero neque architecto. Libero minima culpa obcaecati molestiae amet, porro sequi. Nostrum, sequi cumque facere voluptatem optio fugit assumenda ut delectus iusto itaque sit nemo consequuntur voluptas deserunt magni quas perferendis hic quaerat accusantium maiores non! Similique, molestias quia dolores voluptas dolore, commodi excepturi aspernatur quas ipsa deleniti dignissimos voluptates at qui. Sunt recusandae illum aliquam tenetur perferendis optio necessitatibus nostrum dolor? Non fuga ducimus, necessitatibus odio excepturi, fugit repellendus, qui dolore distinctio amet autem illo nostrum sint tenetur tempora totam adipisci eos? Illum deserunt voluptate dicta quas officiis, nesciunt labore reiciendis minus, et exercitationem facilis pariatur illo! Natus commodi id in quidem. Saepe praesentium ipsa, quas distinctio at animi! Non sunt minus dolorem unde fuga fugiat a nobis officiis quo. Commodi quibusdam dolor suscipit voluptatem aliquam hic. Fuga maiores alias unde officiis, assumenda et esse pariatur numquam optio eligendi quas velit dolor a molestiae sint impedit repellat nemo doloribus dignissimos enim consequatur fugiat id vero vel. Ipsum dolorem nisi, voluptatum veritatis laborum dicta laboriosam ea.
            </ExpandableComponent>
         </p>
 }

 export default App