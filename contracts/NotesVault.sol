// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NotesVault {
    // Estructura para representar una Nota
    struct Note {
        uint256 id;
        string content;
        uint256 timestamp;
    }

    // Mapeo para almacenar las notas de cada usuario
    mapping(address => Note[]) private userNotes;

    // Evento para notificar cuando se crea una nueva nota
    event NoteCreated(address indexed user, uint256 id, string content, uint256 timestamp);

    // Función para añadir una nueva nota
    function addNote(string memory _content) public {
        uint256 noteId = userNotes[msg.sender].length + 1;
        Note memory newNote = Note(noteId, _content, block.timestamp);
        userNotes[msg.sender].push(newNote);

        emit NoteCreated(msg.sender, noteId, _content, block.timestamp);
    }

    // Función para obtener todas las notas de un usuario
    function getMyNotes() public view returns (Note[] memory) {
        return userNotes[msg.sender];
    }
}
