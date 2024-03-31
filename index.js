import mysql2 from 'mysql2'
import express from 'express'


const connection = mysql2.createConnection(
    {
        host: 'localhost',
        database: 'assignment',
        user: 'root',
        password: 'Omkar@123'
    }
)


const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
    connection.connect(err => {
        if (err) {
            throw err
        } else {
            console.log('Database connected')
        }
    })
})

app.use("/products", (req, res) => {
    const sqlQuery = `select * from assignment_data`
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.use("/months", (req, res) => {
    const sqlQuery = `select * from monthly_data`
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.use("/sales", (req, res) => {
    const sqlQuery = `select * from sales_data`
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})