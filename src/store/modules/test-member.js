import {fetch} from '@/api/TestMember';
//상태관리 -> api
export const testMember = {
    namespaced:true,

    state: {
        data : []
    },
    getters: {
    },
    mutations: {
        async getData(state){
            const res = await fetch.get();
            state.data = res;
        },
        async postData(state,value){
            await fetch.post(value);
            
            const last = state.data.length -1;
            const num = state.data[last].num
            state.data.push({...value,num:num+1});
        },
        async setData(state,value){
            await fetch.put(value);
            const data = [...state.data];
            const set = data.map((obj)=>{
                if(obj.num == value.num){
                    obj.name = value.name;
                    obj.email = value.email;
                }
                return obj;
        })
        
        state.data = set;
        },
        async delData(state,num){
            await fetch.delete(num);
            const data = [...state.data];
            const set = data.filter((obj)=>obj.num != num);
            state.data=set;
        }
    },
    actions: {
    }
}