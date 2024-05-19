document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const resultElement = document.getElementById('result');

    const items = [
        'Reto Bauhaus (Visual y Kinestésico): Atrévete a diseñar y dibujar en menos de 5 minutos un mueble, objeto u accesorio utilizando únicamente circulos, triángulos y/o cuadrados.',
        'Reto adivinanzas famosas (Auditivo): En un grupo grande tomen turnos para hacer adivinanzas de logos famosos, dando pistas de por ej: Color, forma, mascota, etc... queda a tu imaginación.',
        'Solo un break de 5 minutos: A veces es necesario para entrar nuevamente en el mood de concentración que se requiere para la clase.',
        'Reto de dibujo en 1 minuto (Visual y Kinestésico): Dibuja un personaje en menos de un minuto, trata de hacerlo lo más completo posible y al final, dale una historia.',
        'Simón dice (Auditivo y Kinestésico): En este reto, el maestro será Simón, el estudiante que gane el juego gana un punto para la clase.',
        'Reto de ¿Cómo lo resolverias? (Auditivo y creativo): El maestro debe proponer un problema relacionado con el tema visto en clase, cada estudiante tendrá 3 minutos para pensar en una solución.',
        'Reto de la playlist (Auditivo): ¿Qué canción dirias que te recuerda al tema que estas viendo en clase? Cada estudiante deberá proponer una canción relacionada con el tema, así se armará una playlist entre todos para el tema visto en clase.',
        'Reto de las charadas (Kinestésico): En grupos pequeños o entre toda la clase, alguién escogerá una palabra clave relacionada con la clase, y tratará por medio de gestos corporales que los otros adivinen que palabra es.',
        'Reto del ahorcado (Auditivo y Kinestésico): El profesor será quien escriba los conceptos vistos en clase en el tablero, el estudiante que más adivine ganará algun punto, si el profesor gana, los estudiantes le deben un dulce.',
        'Reto de la A a la Z (Auditivo): En orden cada estudiante tendrá que decir un termino o palabra clave relacionada con la clase en el orden del abecedario, asi que el primer estudiante dirá una palabra que empiece por a y así sucesivamente.',
        'Reto del ritmo (Auditivo y kinestésico): Entre todos jueguen ritmo, pero esta vez, solo con palabras y terminos relacionados con la clase',
        'Reto del stop (Visual y kinestesico): Entre todos, jueguen stop, el profe será el moderador.'
    ];

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        resultElement.textContent = randomItem;
    });
});
