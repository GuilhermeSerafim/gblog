import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post() {
    const parametros = useParams();
    console.log(parametros);
    return (
     <h1>Post {parametros.id}</h1>
    )
}