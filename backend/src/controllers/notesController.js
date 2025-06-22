import Note from "../models/Note.js";

export async function getAllNotes(req, res){
    
    try{
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    }catch(error){
        console.log("error fetching all notes", error);
        res.status(500).json({message: "Internal server errror"});
    }
   
    
};

export async function getNoteById(req, res){
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    }catch(error){
        
    }
};

export async function createNote(req, res){
    try{

        const {title, content} = req.body;
        const note = new Note({title, content});

        const savedNote = await note.save();
        res.status(201).json(savedNote)

    }catch(error){
        console.log("error creating new note", error);
        res.status(501).json({message: "Error creating note"})
    }
}

export async function updateNote(req, res){
    try{
        const { title, content } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
            {
                new : true,
            }
        );

        if(!updatedNote) return res.status(404).json({message: "Note not found"});

        res.status(200).json(updatedNote);
    }
    catch(error){
        console.log("error updating note", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req, res){
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Note deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: "interal server error"});
    }
    


}