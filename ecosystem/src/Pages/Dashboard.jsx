function Dashboard() {
    return ( 
        <>
            <div className="caixa">
                <div className="paineis">
                    <div className="painel-1">
                            <div className="texto-painel-1">
                                <h1 id="Titulo-painel-1">Gráfico Temp</h1>
                                <p id="p-painel1">Aqui Ficará um gráfico sobre a temperatura das aguas através do arduino</p>
                            </div>
                    </div>
                    
                    <div className="painel-2">
                        <div className="texto-painel-2">
                            <h1 id="Titulo-painel-2">Vida Marinha</h1>
                            <p id="p-painel2">Aqui ficarão gráficos indicando as quantidades e a qualidade da vida marinha através do arduino</p>
                        </div>
                    </div>

                    <div className="painel-3">
                            <div className="texto-painel-3">
                                <h1 id="Titulo-painel-3">Qualidade da Água</h1>
                                <p id="p-painel3">Aqui ficarão gráficos indicando a qualidade da agua através do arduino</p>
                            </div>
                    </div>
                </div>
            </div>


            <div className="caixa2">
                <div className="paineis2">
                    <div className="painel-1-embaixo">
                            <div className="texto-painel-1-embaixo">
                                <h1 id="Titulo-painel-1-embaixo">Gráfico Ph</h1>
                                <p id="p-painel1">Ph das águas oceânicos através do Arduino</p>
                            </div>
                    </div>
                    
                    <div className="painel-2-embaixo">
                        <div className="texto-painel-2-embaixo">
                            <h1 id="Titulo-painel-2-embaixo">Absorção de Co2</h1>
                            <p id="p-painel2">Aqui ficarão gráficos indicando as quantidades e a qualidade da vida marinha</p>
                        </div>
                    </div>

                    <div className="painel-3-embaixo">
                            <div className="texto-painel-3-embaixo">
                                <h1 id="Titulo-painel-3-embaixo">Clima da Região</h1>
                                <p id="p-painel3">Aqui ficarão gráficos indicando a qualidade da agua</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Dashboard;