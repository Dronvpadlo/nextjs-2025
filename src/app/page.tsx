import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (
    <div className={styles.page}>
        {/*<form action="/submit">*/}
        {/*    <input type="text" placeholder={"username"} name={"name"}/>*/}
        {/*    <button>Submit</button>*/}
        {/*</form>*/}

        <Form action={'/submit'} method="POST">
            <input type="text" name={'name'} placeholder={'name'}/>
            <button>Send</button>
        </Form>
    </div>
  );
}
