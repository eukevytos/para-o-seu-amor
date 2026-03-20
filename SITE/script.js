let correctAnswers = 0;
        let totalQuestions = 3;

        // Função para selecionar uma opção
        function selectOption(option, questionId) {
            // Remove a seleção de todas as outras opções desta pergunta
            const card = document.querySelector(`.quiz-card[data-question="${questionId}"]`);
            const options = card.querySelectorAll('.quiz-option');
            options.forEach(opt => opt.classList.remove('selected'));

            // Adiciona a seleção à opção clicada
            option.classList.add('selected');

            // Mostra o botão de enviar no final, se todas as perguntas foram respondidas
            checkCompletion();
        }

        // Verifica se todas as perguntas foram respondidas
        function checkCompletion() {
            const answeredQuestions = document.querySelectorAll('.quiz-option.selected').length;
            if (answeredQuestions === totalQuestions) {
                document.querySelector('.quiz-submit-btn').style.display = 'inline-block';
            }
        }

        // Verifica os resultados
        function checkQuiz() {
            correctAnswers = 0;
            const selectedOptions = document.querySelectorAll('.quiz-option.selected');

            selectedOptions.forEach(option => {
                if (option.classList.contains('correct-option')) {
                    option.classList.add('correct');
                    correctAnswers++;
                } else {
                    option.classList.add('incorrect');
                }
            });

            // Mostra os resultados
            showResults();
        }

        function showResults() {
            document.getElementById('score-value').textContent = correctAnswers;
            const messageElement = document.getElementById('quiz-message');
            
            // Mensagens personalizadas com base na pontuação
            if (correctAnswers === totalQuestions) {
                messageElement.textContent = "Uau! Você conhece nossa história perfeitamente. Te amo!";
            } else if (correctAnswers > totalQuestions / 2) {
                messageElement.textContent = "Mandou bem! Quase lá. O importante é nossa cumplicidade.";
            } else {
                messageElement.textContent = "Acho que precisamos criar mais memórias juntos... vamos?";
            }

            document.getElementById('quiz-results').style.display = 'block';
            document.querySelector('.quiz-submit-btn').style.display = 'none'; // Esconde o botão

            // Rola suavemente para os resultados
            document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });
        }