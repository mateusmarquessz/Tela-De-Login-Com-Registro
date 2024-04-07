import { db } from "../db.js";


//Read do CRUD
export const getUsers = (_, res) =>{
    //q de query que faz o select de todos os usuarios
    const q = "SELECT * FROM usuarios";

    //Verificao de erro com a json
    db.query(q,(err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

//Create do CRUD
export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`Nome`, `Sobrenome`, `Email`, `DataNascimento`) VALUES(?)";

  const values = [
    req.body.Nome,
    req.body.Sobrenome,
    req.body.Email,
    req.body.DataNascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};


//Update do CRUD
export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `Nome` = ?, 'Sobrenome' = ?, `Email` = ?, `DataNascimento` = ? WHERE `id` = ?";
  
      const values = [
        req.body.Nome,
        req.body.Sobrenome,
        req.body.Email,
        req.body.DataNascimento,
      ];

    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };

//Delete do CRUD
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };