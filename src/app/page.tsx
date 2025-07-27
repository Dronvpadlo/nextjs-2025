import styles from "./page.module.css";
import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/ServerActions";

export default async function Home() {
  const mealsArray = await getMeals();


  return (
    <div className={styles.page}>
        <Form action={saveMeal}>
            <input type="text" name={'title'} placeholder={'title'}/>
            <button>Send</button>


        </Form>

        <div>
            {mealsArray.map((meal, index) => <p key={index}>{meal.id}. {meal.title}</p>)}
        </div>

    </div>
  );
}
