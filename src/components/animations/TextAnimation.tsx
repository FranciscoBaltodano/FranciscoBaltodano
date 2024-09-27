export const Animation = ( { contenido }:{contenido:string} ) => {        
    const letras      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const animacion   = ({ target }:{ target:any }) => {
        
        let iteracion = 0;
        let tamanio   = target.innerText.length;
        
        const intervaloId = setInterval( () => {
            if (iteracion < tamanio) {
                target.innerText = target
                    .innerText
                    .split('')
                    .map( ( i:string, index:number ) => {(
                        index <= iteracion ) 
                            ? ( i = contenido[index] ) 
                            : ( i = letras[ Math.floor( Math.random()*letras.length ) ] 
                        );                    
                    
                        return i;
                                
                    })
                    .join('');
                iteracion = iteracion + 1/3;
            }else{
                clearInterval( intervaloId );
            };        
        }, 20 );
    };        
    
    const finAnimacion= ( { target }:{ target : any } )=> {
        target.innerText = contenido;
    };    
    
    return (        
        <h1 onMouseEnter={animacion} onMouseLeave={finAnimacion}>{ contenido }</h1>    
    );
};