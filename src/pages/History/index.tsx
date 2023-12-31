import { HistoryContainer, HistoryList, Status } from "./styles";

export function History(){
    return(
        <HistoryContainer>
            <h1>Meu Historico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Conserto de débitos técnicos </td>
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                            <Status statusColors="yellow">
                                    Em andamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Conserto de débitos técnicos </td>
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColors="yellow">
                                    Em andamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Conserto de débitos técnicos </td>
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColors="green">
                                    Concluído
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Conserto de débitos técnicos </td>
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColors="red">
                                    Interrompido
                                </Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}