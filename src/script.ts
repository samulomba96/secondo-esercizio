//https://mongoosejs.com/docs/models.html#deleting

import mongoose from "mongoose";
import { Post } from "./models/db";

// Creare Schema e Modello di mongoose per il post V
// Ritornare l'elenco completo dei posts
// Inserire un post V
// Aggiornare un post V
// Eliminare un post V

export const insertNewPost = async (titolo: string, testo:string) => {

    try {
        
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"esercizio_post"});

       console.log("insertNewPost: Connesso a MongoDB con successo!");

       const newP = new Post();
       newP.titolo = titolo;
       newP.testo = testo;

       return await newP.save();
       
    } catch (error) {
        console.log("inserNewPost: Errore durante la connessione a MongoDB:", error);
    } finally {
        await mongoose.disconnect();
    };

};

export const getPosts = async () => {

    try {
    
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"esercizio_post"});

       console.log("getPosts: Connesso a MongoDB con successo!");

        return await Post.find();
       
    } catch (error) {
        console.log("getPosts: Errore durante la connessione a MongoDB:", error);
    } finally {
        await mongoose.disconnect();
    };

};

export const deletePosts = async (titolo: string, testo:string) => {

    try {
        
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"esercizio_post"});

       console.log("deletePosts: Connesso a MongoDB con successo!");

       //elimina tutti i post
       //return await Post.deleteMany();
       //elimina l'ultimo post
       return await Post.deleteOne();
       
    } catch (error) {
        console.log("deletePosts: Errore durante la connessione a MongoDB:", error);
    } finally {
        await mongoose.disconnect();
    };

};

export const updatePost = async (titolo: string, testo:string) => {

    try {
        
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"esercizio_post"});

       console.log("updatePost: Connesso a MongoDB con successo!");

       return await Post.findOneAndUpdate({ _id: "67390ba54d6817c82c866e4c" },{ titolo, testo });
        
    } catch (error) {
        console.log("updatePost: Errore durante la connessione a MongoDB:", error);
    } finally {
        if (await Post.findOneAndUpdate({ _id: "67390ba54d6817c82c866e4c" },{ titolo, testo })) {
            console.log("updatePost: Documento aggiornato con successo:", { titolo, testo });
        } else {
            console.log("updatePost: Nessun documento trovato con l'ID specificato.");
        }
        await mongoose.disconnect();
    };

};

