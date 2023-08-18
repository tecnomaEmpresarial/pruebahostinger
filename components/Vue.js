var app = new Vue({
    el: '#app',
    props: ['url'],
    data: {  
        valor: 1,
    },   
    created(){
        // this.url = "/correoelectronico"
    },
    methods: {
        mostrar:function(opc){
            this.valor=opc;
        },
    },
})