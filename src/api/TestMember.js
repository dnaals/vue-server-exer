import axios from 'axios';
//서버에 요청
export const fetch = {
    create:async()=>{
        const res = await axios('https://web-vue-server-4vrp32alrjy7skg.sel5.cloudtype.app/create');
        return res.data
    },
    get:async ()=>{
        const res = await axios('https://web-vue-server-4vrp32alrjy7skg.sel5.cloudtype.app/vue');
        return res.data
    },
    post : async (value)=>{
        const res = await axios.post('https://web-vue-server-4vrp32alrjy7skg.sel5.cloudtype.app/insert',value);
        return res.data;
    },
    put :  async (value)=>{
        const res = await axios.put('https://web-vue-server-4vrp32alrjy7skg.sel5.cloudtype.app/update',value);
        return res.data;
    },
    delete :  async (num)=>{
        const res = await axios.delete(`https://web-vue-server-4vrp32alrjy7skg.sel5.cloudtype.app/vue/delete?num=${num}`);
        return res.data;
    }
}