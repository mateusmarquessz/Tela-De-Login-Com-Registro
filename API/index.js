import  express, { application }  from "express";

const app = express();

app.use(express.json());
app.use(cors());

application(8800);