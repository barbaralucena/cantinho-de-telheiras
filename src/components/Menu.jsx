import "../style/Menu.css"

export default function Menu(){
    return(
        <div className="menu">
        
            <header>
                <h1>O nosso menu</h1> 
                <p>(A oferta de pratos varia diariamente)</p>
            </header>
            <nav>
                <ul className="nav-list">
                    <li onClick="/">Pratos de Carne</li>
                    <li onClick="/">Pratos de Peixe</li>
                    <li onClick="/">Petiscos</li>
                    <li onClick="/">Sobremesas</li>
                    <li onClick="">Garrafeira</li>
                </ul>
            </nav>
            <main>
            
            <div>                
                <h2>Pratos de Peixe</h2>
                <ul>
                    <li>Dourada ou robalinho Grelhado</li>
                    <li>Caril de Gamas c/Arroz Basmati </li>
                    <li>Salmão Grelhado</li>
                    <li>Bitoque de Atum c/Ovo</li>
                    <li>Gambas à Guilho c/Arroz Branco</li>
                </ul>
            </div>
            <div>
                <h2>Pratos de Carne</h2>
                <ul>
                    <li>Costeleta de Novilho no Churrasco</li>
                    <li>Alheira Frita c/Ovo</li>
                    <li>Hambúrguer de Novilho c/Ovo</li>
                    <li>Bifinhos de Peru Grelhados c/Molho de Limão</li>
                    <li>Bifinho do Lombo Grelhado</li>
                    <li>Iscas Fritas ao Alho</li>
                    <li>Bitoque especial do Lombo</li>
                </ul>
            </div>
            <div>
                <h2>Petiscos</h2>
                <ul>
                    <li>Omelete de Gambas c/Arroz e Batata Frita</li>
                    <li>Omelete de queijo/fiambre c/Arriz e Batata Frita</li>
                    <li>Omelete de Legumes</li>
                </ul>
            </div>
            <div>
                <h2>Sobremesas</h2>
                    <ul>
                        <li>Arroz Doce</li>
                        <li>Leite Creme Queimado</li>
                        <li>Bolo de Bolacha</li>
                        <li>Chiffon de Chocolate</li>
                        <li>Faráfias c/Creme de Ovo</li>
                        <li>Sericaia c/Ameixa</li>
                        <li>Fidalgo Alentejano</li>
                    </ul>
            </div>

        </main>
        </div>
    );
}