import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const app = express();
app.use(express.json());

const port: number = parseInt(process.env.PORT || '4001', 10);

app.get('/', ( req: Request, res: Response)=>{
  res.send('Hello World..!!!');
});

async function axiosRequest(){
 const { data } = await  axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
 return data;
}

axiosRequest().then(data => console.log(data));

app.listen(port, ()=>{
  console.log(`Application is running on port ${port}`);
});