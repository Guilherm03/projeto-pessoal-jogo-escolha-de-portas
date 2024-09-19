let menu;
let answer;
let gameStats = [];

do {
    menu = prompt(`Olá jogador, o que deseja fazer entre as opções abaixo?
        1- Jogar
        2- Créditos
        3- Estatísticas
        4- Sair
    `);

    switch (menu) {

        case "1":
            let prizeDoor = Math.random() >= 0.5 ? 1 : 2;
            let attempts = 10;
            let win = 0;
            let losses = 0;

            while (attempts > 0) {
                answer = prompt(`Escolha entre as portas 1 e 2. Você tem ${attempts} tentativas restantes.`);

                if (answer === "1") {
                    alert(`A porta 1 revela: ${prizeDoor === 1 ? 'Prêmio!' : 'Nada.'}`);
                } else if (answer === "2") {
                    alert(`A porta 2 revela: ${prizeDoor === 2 ? 'Prêmio!' : 'Nada.'}`);
                } else {
                    alert("Escolha inválida! Tente novamente.");
                    continue; // Não desconta a tentativa para escolhas inválidas
                }

                attempts--;

                if ((prizeDoor === 1 && answer === "1") || (prizeDoor === 2 && answer === "2")) {
                    alert("Parabéns você encontrou o prêmio!");
                    win++;
                    break; // Sai do loop while quando o prêmio é encontrado
                }
                
                losses++;
                if (attempts === 0) {
                    alert("Suas tentativas acabaram! Tente novamente.");
                }
            }

            gameStats.push({ wins: win, losses: losses });
            break;

        case "2":
            alert(`Dev(s): João Guilherme\nJogo: Escolha de portas`);
            break;

        case "3":
            if (gameStats.length > 0) {
                let stats = "Estatísticas dos Jogos:\n";
                for (let i = 0; i < gameStats.length; i++) {
                    let stat = gameStats[i];
                    stats += `Jogo ${i + 1}: (Vitórias: ${stat.wins}, Derrotas: ${stat.losses})\n`;
                }
                alert(stats);
            } else {
                alert("Nenhuma estatística disponível.");
            }
            break;

        case "4":
            alert("Volte sempre!");
            break;

        default:
            alert('Opção inválida. Tente novamente.');
            break;
    }

} while (menu !== "4");