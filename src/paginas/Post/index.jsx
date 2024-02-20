import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post() {
    const parametros = useParams();
    console.log(parametros);
    return (
     <h1>Opa</h1>
    )
}