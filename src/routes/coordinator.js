

//2.1 criaçao do coordinator, que ficara responsavel pela navegação 

//2.2 criação das funções de navegação

// as funções recebem o navigate como parametro, e os argumentos são passados nas paginas que serão navegaveis, pois não podemos importar e usar o navigate em um componente não funcional.

// chamaeromos o usenavegita nos componentes onde estão os botoes que levarão para as paginas, nesse caso o header

// no goToProfile, alem do navighate ele vai receber o path params como template string, pois ele guarda o valor dsa url, assim mandaremos para a pagina de um usuario especifico

// o navigate dentro da função recebe entre parenteses o caminho

export const goToHome= (navigate)=>{

    navigate('/')

}
export const goToProfile= (navigate, name)=>{

    navigate(`/profile/${name}`)

}

export const goToLogin = (navigate)=>{

    navigate(`/login`)
}