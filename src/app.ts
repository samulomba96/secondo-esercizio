import { config } from "dotenv";
config();

import * as p from "./script";
//p.insertNewPost("inserisci titolo", "miao"); 
//p.deletePosts("", "");
//p.updatePost("nuovo titolo","nuovo testo");
p.getPosts().then(tuttiIPost => console.log("Ecco i tutti i Post:", tuttiIPost));