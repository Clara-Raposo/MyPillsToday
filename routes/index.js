var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. 
router.get('/', function(req, res, next) {
  res.send( "You've already made it here.");
});*/

router.get("/pills", async function(req, res) {
  // Devuelve la lista completa de items
  try {
    const result = await db("SELECT * FROM pills ORDER BY id ASC;");
    const pills = result.data;
    res.send(pills);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/pills/frecuency", async function(req, res) {
  // Devuelve la lista completa de items
  try {
    const result = await db("SELECT pills.id, pills.name, pills.dosis, daily_pills.breakfast, daily_pills.lunch, daily_pills.dinner FROM pills INNER JOIN daily_pills ON pills.id=daily_pills.pill_id;");
    const pills = result.data;
    res.send(pills);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/pills/:pills_id", async function(req, res) {
  // Devuelve la lista completa de items
  try {
    const result = await db(
      `SELECT * FROM pills
      LEFT JOIN daily_pills
      ON pills.id = daily_pills.pill_id
      WHERE pills.id = ${req.params.pills_id};`
    );

    res.send(result.data)
  }catch (err) {
    res.status(500).send(err);
  }
});

router.post("/pills", async function(req, res) {
  const body = req.body; //obtiene los datos del body
  const sql = `INSERT INTO pills(name, dosis, fecha,frecuency) VALUES ('${body.name}', ${body.dosis}, '${body.date}' ,${body.frecuency})`; //manda la orden a la base de datos
  

  try {
    await db(sql); //añade la tarea
    const lastIdResult = await db('SELECT MAX(id) FROM pills')
    const lastId = lastIdResult.data[0]['MAX(id)']
    const sql1 = `INSERT INTO daily_pills(pill_id, breakfast, lunch, dinner) VALUES ('${lastId}', ${body.breakfast}, '${body.lunch}', '${body.dinner}')`
    await db(sql1)
    const result = await db("SELECT * FROM pills;");
    const pills = result.data;
    res.send(pills);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put("/pills/:pills_id", async (req, res) => {
  try {
    const result = await db(
      `SELECT * FROM pills WHERE id = ${req.params.pills_id};`
    );

    if (!result) {
      res.status(404).send();
      return;
    }

    await db(
      `UPDATE pills SET name = '${req.body.name}', dosis = ${req.body.dosis}, frecuency = '${req.body.frecuency}' WHERE id = ${req.params.pills_id};`
    );

    const updatedPill = await db("SELECT * FROM pills ORDER BY id ASC;");

    res.send(updatedPill.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/pills/:pills_id", async (req, res) => {
  try {
    const result = await db(
      `SELECT * FROM pills WHERE id = ${req.params.pills_id};`
    );

    if (!result) {
      res.status(404).send();
      return;
    }

    await db(`DELETE FROM pills WHERE id = ${req.params.pills_id};`);

    const updatedItems = await db("SELECT * FROM pills ORDER BY id ASC;");

    res.send(updatedItems.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;

// res.send( { title: 'Express' });