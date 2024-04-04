import axios from 'axios';
//서버에 요청
export const fetch = {
    create:async()=>{
        const res = await axios('http://localhost:3030/create');
        return res.data
    },
    get:async ()=>{
        const res = await axios('http://localhost:3030/vue');
        return res.data
    },
    post : async (value)=>{
        const res = await axios.post('http://localhost:3030/vue/insert',value);
        return res.data;
    },
    put :  async (value)=>{
        const res = await axios.put('http://localhost:3030/vue/update',value);
        return res.data;
    },
    delete :  async (num)=>{
        const res = await axios.delete(`http://localhost:3030/vue/delete?num=${num}`);
        return res.data;
    }
}