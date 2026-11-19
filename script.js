let userXP = 350;
let currentTopic = 1;
let currentExpPage = 0;
let currentExIndex = 0;
let isExamMode = false;

function showScreen(screenId) {
    document.querySelectorAll('.screen-step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

function goToMenu() {
    isExamMode = false;
    showScreen('screen-menu');
}

// 5 PANTALLAS EXPLICATIVAS PARA VARIABLES (CON EL VIDEO DE YOUTUBE CORREGIDO)
const mediumExamBank = [
    {
        question: "¿Qué tipo de dato asigna Python automáticamente a la variable <code class='text-cyan-300'>nivel_acceso = 3.5</code>?",
        options: ["A) int", "B) str", "C) bool", "D) float"],
        correct: 3,
        explanation: "Al tener un punto decimal, Python lo interpreta como float."
    },
    {
        question: "¿Cuál es el operador lógico que devuelve True únicamente si ambas condiciones evaluadas son verdaderas?",
        options: ["A) or", "B) and", "C) not", "D) is"],
        correct: 1,
        explanation: "and exige que todas las condiciones se cumplan."
    },
    {
        question: "Siguiendo la precedencia de operadores, ¿cuál es el resultado de <code class='text-purple-300 font-mono'>resultado = 2 + 3 * 4</code>?",
        options: ["A) 20", "B) 14", "C) 24", "D) 9"],
        correct: 1,
        explanation: "La multiplicación tiene prioridad (3 * 4 = 12), luego se suma 2 (14)."
    }
];

const explanationPages = {
    1: [
        {
            badge: "Pantalla 1 de 5 | Concepto Fundamental",
            html: `
                <p class="font-bold text-cyan-300">1. Variables: Las "Cajas" de la Memoria 📦</p>
                <p>Para que una computadora pueda resolver algo, primero necesita recordar datos. Una variable es simplemente un espacio en la memoria de la computadora al que le ponemos un nombre y donde guardamos un valor.</p>
                <div class="bg-slate-900 p-2.5 rounded border border-cyan-800 text-xs">
                    <strong>💡 Metáfora de la Caja:</strong> Si escribes <code class="text-cyan-300">edad = 20</code>, creas una caja llamada <strong>edad</strong> y guardas el número <strong>20</strong> dentro.
                </div>
                <div class="bg-cyan-950/60 p-2 rounded border border-cyan-700/50 font-mono text-sm flex justify-between">
                    <span class="text-cyan-300">🔎 Analizador en Vivo:</span>
                    <span class="text-yellow-300">Variable: <strong>edad</strong> | Valor: <strong>20</strong></span>
                </div>
            `
        },
        {
            badge: "Pantalla 2 de 5 | Tipos de Datos Primitivos",
            html: `
                <p class="font-bold text-cyan-300">Tipos de Datos en una Variable 🔢</p>
                <p>En Python, las variables pueden almacenar diferentes tipos de información según lo que necesites calcular:</p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li><strong>Enteros (int):</strong> Números sin decimales (<code class="text-cyan-300">vidas_jugador = 3</code>)</li>
                    <li><strong>Decimales (float):</strong> Números con punto flotante (<code class="text-cyan-300">precio_juego = 59.99</code>)</li>
                    <li><strong>Texto (str):</strong> Cadenas de caracteres (<code class="text-cyan-300">nombre = "CyberKnight"</code>)</li>
                    <li><strong>Booleanos (bool):</strong> Valores de Verdad o Falso (<code class="text-cyan-300">activo = True</code>)</li>
                </ul>
            `
        },
        {
            badge: "Pantalla 3 de 5 | Reglas de Nomenclatura",
            html: `
                <p class="font-bold text-cyan-300">Reglas de Oro para Nombrar Variables ✍️</p>
                <p>Para evitar errores de sintaxis al programar, debes seguir estas normas obligatorias:</p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>Deben empezar siempre con una letra o un guion bajo (<code class="text-cyan-300">_</code>), nunca con un número.</li>
                    <li>No pueden contener espacios en blanco ni símbolos especiales como <code class="text-red-400">@, -, $</code>.</li>
                    <li>Python distingue estrictamente entre mayúsculas y minúsculas (<code class="text-cyan-300">Puntaje</code> y <code class="text-cyan-300">puntaje</code> son variables totalmente distintas).</li>
                </ul>
            `
        },
        {
            badge: "Pantalla 4 de 5 | Mutabilidad y Reasignación",
            html: `
                <p class="font-bold text-cyan-300">¿Por qué se llaman Variables? 🔄</p>
                <p>Lo más interesante es que su valor puede cambiar (variar) a lo largo de la ejecución del programa:</p>
                <div class="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-cyan-300 space-y-1">
                    <p>vidas = 3  # Valor inicial</p>
                    <p>vidas = vidas - 1  # El valor cambia a 2</p>
                    <p>print(vidas)</p>
                </div>
                <p class="text-[11px]">La computadora siempre conservará el último valor que se le haya asignado a la caja en memoria.</p>
            `
        },
        {
            badge: "Pantalla 5 de 5 | Video Explicativo de YouTube",
            html: `
                <p class="font-bold text-cyan-300">Video Tutorial Oficial de PyBot 🎥</p>
                <div class="aspect-video max-w-md rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe 
                        class="w-full h-full" 
                        src="https://www.youtube.com/embed/kZfuJvkdcHU" 
                        title="Variables en Python" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="flex justify-between items-center text-[11px] text-slate-300 pt-1">
                    <span>¿No carga en vista local?</span>
                    <a href="https://youtu.be/kZfuJvkdcHU?si=rCjh5kXeAfSinH-r" target="_blank" class="text-cyan-400 underline hover:text-cyan-300 font-mono">
                        <i class="fa-brands fa-youtube text-red-500"></i> Ver directamente en YouTube
                    </a>
                </div>
            `
        }
    ],
    2: [
        {
            badge: "Pantalla 1 de 5 | Introducción a Operadores",
            html: `
                <p class="font-bold text-purple-300">2. OPERADORES: LAS HERRAMIENTAS DE MANIPULACIÓN ⚙️</p>
                <p class="text-sm text-slate-300">Una vez que tenemos los datos en nuestras variables, necesitamos herramientas para modificarlos, combinarlos o compararlos. A estas herramientas las llamamos <strong>operadores</strong>.</p>
                <p class="text-sm text-slate-300">Los operadores son símbolos especiales que le indican a Python qué acción debe realizar con las variables y los valores. Se dividen en tres grandes familias principales.</p>
            `
        },
        {
            badge: "Pantalla 2 de 5 | A. Operadores Aritméticos",
            html: `
                <p class="font-bold text-purple-300">A. Operadores Aritméticos ➕</p>
                <p class="text-sm text-slate-300 mb-1">Sirven para hacer operaciones matemáticas estándar:</p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300 font-mono">
                    <li><strong>+ (Suma):</strong> total = 15 + 10</li>
                    <li><strong>- (Resta):</strong> saldo = 100 - 45</li>
                    <li><strong>* (Multiplicación):</strong> costo = 12 * 3</li>
                    <li><strong>/ (División):</strong> promedio = 50 / 2 (resultado decimal)</li>
                    <li><strong>// (División entera):</strong> 7 // 2 (da 3, descarta residuo)</li>
                    <li><strong>% (Módulo/residuo):</strong> 7 % 2 (da 1, útil para par/impar)</li>
                    <li><strong>** (Potencia):</strong> 2 ** 3 (equivalente a 8)</li>
                </ul>
            `
        },
        {
            badge: "Pantalla 3 de 5 | B. Operadores de Comparación",
            html: `
                <p class="font-bold text-purple-300">B. Operadores de Comparación ⚖️</p>
                <p class="text-base text-slate-300 mb-1">Comparan dos valores y siempre devuelven un valor booleano (<code class="text-purple-300">True</code> o <code class="text-purple-300">False</code>):</p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300 font-mono">
                    <li><strong>== (Igual a):</strong> nivel_desbloqueado == 5</li>
                    <li><strong>!= (Diferente de):</strong> rango_jugador != "Novato"</li>
                    <li><strong>> y < (Mayor/Menor que):</strong> edad >= 18</li>
                    <li><strong>>= y <= (Mayor/Menor o igual):</strong> intentos_restantes <= 0</li>
                </ul>
            `
        },
        {
            badge: "Pantalla 4 de 5 | C. Operadores Lógicos",
            html: `
                <p class="font-bold text-purple-300">C. Operadores Lógicos 🔀</p>
                <p class="text-base text-slate-300 mb-1">Permiten combinar múltiples condiciones:</p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300 font-mono">
                    <li><strong>and (Y):</strong> True solo si ambas son verdaderas.<br><span class="text-slate-400">acceso_vip = pase and nivel >= 10</span></li>
                    <li><strong>or (O):</strong> True si al menos una es verdadera.<br><span class="text-slate-400">puede_jugar = fin_de_semana or vacaciones</span></li>
                    <li><strong>not (No):</strong> Invierte el valor booleano.<br><span class="text-slate-400">banned = not cuenta_activa</span></li>
                </ul>
            `
        },
        {
            badge: "Pantalla 5 de 5 | Video Tutorial de Operadores",
            html: `
                <p class="font-bold text-purple-300">Video Tutorial Oficial sobre Operadores 🎥</p>
                <div class="aspect-video max-w-md rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe 
                        class="w-full h-full" 
                        src="https://www.youtube.com/embed/7U6_8o6PjIs" 
                        title="Operadores en Python Shorts" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <p class="text-base text-slate-300">Has finalizado la teoría de operadores. Haz clic abajo para iniciar la práctica.</p>
            `
        }
    ],
    3: [ // 5 PANTALLAS PARA EL MÓDULO DE PROCESAMIENTO Y SALIDA
        {
            badge: "Pantalla 1 de 5 | El Procesamiento",
            html: `
                <p class="font-bold text-emerald-300">3. EL PROCESAMIENTO Y SALIDA (LA LÓGICA EN ACCIÓN) 🚀</p>
                <p class="text-sm text-slate-300 mb-1">El <strong>procesamiento</strong> ocurre cuando tomas tus variables y aplicas una secuencia de operadores para transformar los datos de entrada en nuevos resultados.</p>
                <p class="text-sm text-slate-300 mb-1">Para que sea exitoso, debemos entender el <strong>orden de precedencia</strong>:</p>
                <ol class="list-decimal pl-4 space-y-0.5 text-sm text-slate-300 font-mono">
                    <li>Paréntesis ()</li>
                    <li>Potencias **</li>
                    <li>Multiplicaciones, divisiones y módulos (*, /, //, %)</li>
                    <li>Sumas y restas (+, -)</li>
                </ol>
            `
        },
        {
            badge: "Pantalla 2 de 5 | Ejemplo de Procesamiento",
            html: `
                <p class="font-bold text-emerald-300">Procesamiento Paso a Paso 💻</p>
                <p class="text-sm text-slate-300 mb-1">Ejemplo calculando el costo final de una compra en tienda de videojuegos:</p>
                <div class="bg-slate-900 p-2 rounded font-mono text-sm text-emerald-300 space-y-0.5">
                    <p>precio_juego = 60.0</p>
                    <p>monto_descuento = precio_juego * 0.20</p>
                    <p>precio_con_desc = precio_juego - monto_descuento</p>
                    <p>precio_final = precio_con_desc + (precio_con_desc * 0.05)</p>
                </div>
                <p class="text-sm text-slate-300 mt-1">Transformamos datos simples usando operadores aritméticos en secuencia lógica.</p>
            `
        },
        {
            badge: "Pantalla 3 de 5 | Salida de Resultados",
            html: `
                <p class="font-bold text-emerald-300">Salida: Mostrando el Resultado 🖥️</p>
                <p class="text-sm text-slate-300 mb-1">De nada sirve que la computadora calcule perfecto si el usuario no lo ve. La <strong>salida (output)</strong> comunica la información al exterior:</p>
                <div class="bg-slate-900 p-2 rounded font-mono text-sm text-emerald-300 space-y-0.5">
                    <p>print("El valor total a pagar es:")</p>
                    <p>print(total_con_descuento)</p>
                </div>
                <p class="text-sm text-slate-300 mt-1">En Python la función universal para esto es <code class="text-emerald-300">print()</code>.</p>
            `
        },
        {
            badge: "Pantalla 4 de 5 | Ejemplo Integrador",
            html: `
                <p class="font-bold text-emerald-300">Ejemplo Integrador Completo 🎮</p>
                <p class="text-sm text-slate-300 mb-1">Calculando puntos totales de un jugador sumando bonos:</p>
                <div class="bg-slate-900 p-2 rounded font-mono text-sm text-emerald-300 space-y-0.5">
                    <p>puntos_base = 1200</p>
                    <p>monedas = 15 * 10</p>
                    <p>puntuacion_total = puntos_base + monedas + 250</p>
                    <p>print(puntuacion_total)</p>
                </div>
                <p class="text-sm text-slate-300 mt-1">Uniendo variables, procesamiento lógico y salida en pantalla.</p>
            `
        },
        {
            
            badge: "Pantalla 5 de 5 | Video Explicativo",
            html: `
                <p class="font-bold text-emerald-300">Video Tutorial Oficial de Procesamiento 🎥</p>
                <div class="aspect-video max-w-md rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe 
                        class="w-full h-full" 
                        src="https://www.youtube.com/embed/HSy8d8FBXUU" 
                        title="Procesamiento y Salida" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="flex justify-between items-center text-sm text-slate-300 pt-1">
                    <span>¿No carga en vista local?</span>
                    <a href="https://youtube.com/shorts/HSy8d8FBXUU?si=Jl-7AEe1fjX6lRLJ" target="_blank" class="text-emerald-400 underline hover:text-emerald-300 font-mono">
                        <i class="fa-brands fa-youtube text-red-500"></i> Ver directamente en YouTube
                    </a>
                </div>
            `
        }
    ]
};
const exercisesBank = {
    1: [ // Ejercicios para Variables
       {
        title: "1. Selección Múltiple (Sencillo)",
        question: "¿Cuál de los siguientes nombres de variable es válido en Python?",
        options: ["A) 2do_nivel", "B) puntaje_maximo", "C) precio-total", "D) nombre usuario"],
        correct: 1,
        explanation: "puntaje_maximo es válido. Las variables no pueden empezar con números ni incluir espacios o guiones."
        },
       {
        title: "2. Relacionar Conceptos (Sencillo)",
        question: "Relaciona el valor <code class='text-cyan-300'>\"CyberKnight\"</code> con su tipo de dato:",
        options: ["A) int", "B) float", "C) str"],
        correct: 2,
        explanation: "Las cadenas de texto delimitadas entre comillas son de tipo str."
       },
       {
        title: "3. Completar Texto (Sencillo)",
        question: "El símbolo <code class='text-cyan-300'>=</code> en programación significa operador de ______.",
        correctValue: "asignacion",
        explanation: "El símbolo = es el operador de asignación en Python."
       },
       {
        title: "4. Identificar Errores (Sencillo)",
        question: "Identifica el error en la línea: <code class='text-red-400 font-mono'>1er_usuario = \"Carlos\"</code>",
        options: ["A) Las variables no pueden comenzar con un número", "B) Falta usar print", "C) Carlos debe ir sin comillas"],
        correct: 0,
        explanation: "Ninguna variable puede empezar con un número."
       },
       {
        title: "5. Clasificar Entradas, Procesos y Salidas",
        question: "En la línea <code class='text-cyan-300'>precio = 100</code>, ¿qué categoría representa?",
        options: ["A) Entrada (Variable Inicial)", "B) Procesamiento", "C) Salida"],
        correct: 0,
        explanation: "Corresponde a la Entrada o inicialización de variables."
        },
        {
        title: "6. Completar Fragmentos de Python",
        question: "Completa para crear una variable numérica llamada <code class='text-cyan-300'>edad</code> con valor 20: <br><code class='text-cyan-300 font-mono'>______ = 20</code>",
        correctValue: "edad",
        explanation: "El nombre exacto de la variable solicitada es edad."
        },
        {
        title: "7. Predecir Resultados",
        question: "¿Qué número muestra en pantalla el código? <br><div class='bg-slate-900 p-2 rounded font-mono text-cyan-300 mt-1'>vidas = 3<br>vidas = vidas + 2<br>print(vidas)</div>",
        correctValue: "5",
        explanation: "vidas se actualiza de 3 a 5 antes de imprimirse."
        }
    ],

2: [ // Ejercicios específicos para Operadores
    {
        question: "¿Qué operador aritmético se utiliza para obtener el <b>residuo o módulo</b> de una división?",
        options: ["A) /", "B) //", "C) %", "D) **"],
        correct: 2, // C
        explanation: "El símbolo % calcula el resto de una división entera. El / divide normal, // da división entera y ** calcula potencias."
    },
    {
        question: "¿Cuál es el operador lógico que devuelve True únicamente si <b>ambas</b> condiciones evaluadas son verdaderas?",
        options: ["A) or", "B) and", "C) not", "D) is"],
        correct: 1, // B
        explanation: "and exige que todas las condiciones se cumplan para arrojar verdadero; or requiere que al menos una lo haga."
    },
    {
        question: "Relaciona la operación <code class='text-purple-300'>10 // 3</code> con su resultado numérico exacto:",
        options: ["A) 3.33", "B) 3", "C) 1"],
        correct: 1, // B
        explanation: "La división entera (//) descarta los decimales, dejando solo la parte entera del cociente."
    },
    {
        question: "Relaciona el operador <code class='text-purple-300'>!=</code> con su significado:",
        options: ["A) Igual a", "B) Mayor o igual que", "C) Diferente de"],
        correct: 2, // C
        explanation: "El operador != significa 'Diferente de'."
    },
    {
        question: "Si queremos evaluar si una variable <code class='text-cyan-300'>edad</code> es estrictamente mayor a 18, utilizamos el operador de comparación ______.",
        options: ["A) >", "B) <", "C) ==", "D) !="],
        correct: 0, // A
        explanation: "Se utiliza el operador mayor que (>), por ejemplo: edad > 18."
    },
    {
        question: "Para elevar un número a una potencia (por ejemplo, dos al cubo), el operador aritmético adecuado es ______.",
        options: ["A) ^", "B) *", "C) **", "D) //"],
        correct: 2, // C
        explanation: "El operador aritmético para potencias es **, por ejemplo: 2 ** 3 da como resultado 8."
    },
    {
        question: "Identifica el error en la siguiente comparación: <code class='text-red-400 font-mono'>es_mayor = edad = 18</code>",
        options: ["A) Falta comillas en 18", "B) Se usa = en lugar de ==", "C) es_mayor no está declarada"],
        correct: 1, // B
        explanation: "Se está usando el operador = (asignación) en lugar de == (comparación). Corrección: es_mayor = edad == 18."
    },
    {
        question: "Completa el operador lógico faltante para que la condición sea verdadera solo si se cumplen ambos requisitos: <code class='text-cyan-300 font-mono'>puede_pasar = tiene_llave ______ nivel_alto</code>",
        options: ["A) or", "B) and", "C) not", "D) in"],
        correct: 1, // B
        explanation: "El operador lógico correcto es and."
    },
    {
        question: "¿Cuál es el resultado de la siguiente operación? <br><div class='bg-slate-900 p-2 rounded font-mono text-cyan-300 mt-1'>x = 10 % 3<br>print(x)</div>",
        options: ["A) 1", "B) 3", "C) 10", "D) 0"],
        correct: 0, // A
        explanation: "10 dividido entre 3 da 3 (con un total de 9), por lo tanto el residuo (módulo) sobrante es 1."
    }
],
3: [ // Ejercicios oficiales para Procesamiento y Salida
        {
            title: "Ejercicio 1.1 (Sencillo)",
            question: "Ordena del 1 al 3 los pasos básicos para resolver un problema informático:",
            options: [
                "A) Mostrar resultado -> Definir variables -> Aplicar operadores",
                "B) 1. Definir variables con datos iniciales<br>2. Aplicar operadores para procesar los datos<br>3. Mostrar el resultado en pantalla (Salida)",
                "C) Aplicar operadores -> Mostrar resultado -> Definir variables"
            ],
            correct: 1,
            explanation: "El orden correcto es: 1. Definir variables con datos iniciales, 2. Aplicar operadores para procesar los datos, 3. Mostrar el resultado en pantalla (Salida)."
        },
        {
            title: "Ejercicio 1.2 (Sencillo)",
            question: "Ordena la ejecución lógica de esta pequeña operación matemática: <code class='text-emerald-300 font-mono'>total = (5 + 3) * 2</code>",
            options: [
                "A) Multiplicar por 2 -> Resolver paréntesis -> Asignar variable",
                "B) 1. Resolver la suma dentro del paréntesis (5 + 3 = 8)<br>2. Multiplicar por 2 (8 * 2 = 16)<br>3. Asignar el valor final a la variable total",
                "C) Asignar variable -> Multiplicar por 2 -> Resolver paréntesis"
            ],
            correct: 1,
            explanation: "El orden de ejecución es: 1. Resolver la suma dentro del paréntesis (5 + 3 = 8), 2. Multiplicar por 2 (8 * 2 = 16), 3. Asignar el valor final a la variable total."
        },
        {
            title: "Ejercicio 3.1 (Medio)",
            question: "El proceso mediante el cual convertimos una idea lógica en un conjunto de órdenes que la máquina ejecuta se denomina escritura de ______.",
            correctValue: "instrucciones",
            explanation: "Se denomina escritura de instrucciones (o código)."
        },
        {
            title: "Ejercicio 4.1 (Medio)",
            question: "Ordena los siguientes pasos para actualizar el puntaje de un usuario:",
            options: [
                "A) Imprimir -> Calcular -> Sumar -> Declarar",
                "B) 1. Declarar la variable puntos_base = 100 y nivel = 3<br>2. Calcular los puntos extra multiplicando nivel por 10<br>3. Sumar puntos_base con los puntos extra en puntuacion_final<br>4. Imprimir el valor actualizado de puntuacion_final",
                "C) Calcular -> Declarar -> Imprimir -> Sumar"
            ],
            correct: 1,
            explanation: "El orden correcto es: 1. Declarar la variable puntos_base = 100 y nivel = 3, 2. Calcular los puntos extra multiplicando nivel por 10, 3. Sumar puntos_base con los puntos extra en puntuacion_final, 4. Imprimir el valor actualizado de puntuacion_final."
        },
        {
            title: "Ejercicio 4.2 (Medio)",
            question: "Ordena la jerarquía de evaluación que sigue Python ante una expresión compleja:",
            options: [
                "A) Operadores aritméticos (*, /, +, -) -> Potencias ** -> Paréntesis ()",
                "B) 1. Paréntesis ()<br>2. Potencias **<br>3. Operadores aritméticos (*, /, +, -)",
                "C) Potencias ** -> Paréntesis () -> Operadores aritméticos (*, /, +, -)"
            ],
            correct: 1,
            explanation: "La jerarquía es: 1. Paréntesis (), 2. Potencias **, 3. Operadores aritméticos (*, /, +, -)."
        },
        {
            title: "Ejercicio 1.1 (Medio)",
            question: "Relaciona la instrucción con su función principal: <code class='text-emerald-300 font-mono'>print()</code>",
            options: [
                "A) Guardar un dato en memoria",
                "B) Mostrar la salida en pantalla",
                "C) Evaluar una condición lógica"
            ],
            correct: 1,
            explanation: "La función print() tiene como función principal mostrar la salida en pantalla."
        },
        {
            title: "Ejercicio 2.1 (Sencillo)",
            question: "Para mostrar un mensaje en la pantalla al usuario, se utiliza la función incorporada llamada ______.",
            correctValue: "print",
            explanation: "Se utiliza la función print (Ejemplo: print('Hola mundo'))."
        },
        {
            title: "Ejercicio 3.1 (Medio)",
            question: "Ordena los componentes al construir un script que saluda:",
            options: [
                "A) Escribir print(mensaje) -> Crear variable -> Guardar archivo",
                "B) 1. Crear la variable mensaje = \"Bienvenido\"<br>2. Escribir print(mensaje)<br>3. Guardar el archivo con extensión .py",
                "C) Guardar archivo -> Crear variable -> Escribir print"
            ],
            correct: 1,
            explanation: "El orden correcto es: 1. Crear la variable mensaje = 'Bienvenido', 2. Escribir print(mensaje), 3. Guardar el archivo con extensión .py."
        }
    ]
};

function startTopic(topicId) {
    currentTopic = topicId;
    currentExpPage = 0;
    showScreen('screen-explanation');
    renderExpPage();
}

function renderExpPage() {
    const pages = explanationPages[currentTopic] || explanationPages[1];
    const data = pages[currentExpPage];

    document.getElementById('exp-badge').innerText = `Pantalla ${currentExpPage + 1} de ${pages.length}`;
    document.getElementById('exp-content').innerHTML = data.html;

    document.getElementById('btn-exp-prev').style.visibility = currentExpPage === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-exp-next');
    
    if (currentExpPage === pages.length - 1) {
        nextBtn.innerHTML = `¡Poner a prueba lo aprendido! <i class="fa-solid fa-rocket"></i>`;
        nextBtn.className = "px-6 py-3 bg-[#CCFF00] hover:bg-[#b3e600] text-slate-950 font-extrabold text-xs font-mono rounded-xl transition-all shadow-lg";
    } else {
        // AQUÍ SE CAMBIÓ EL ESTILO A VERDE LIMA (#CCFF00) CON TEXTO NEGRO (text-slate-950)
        nextBtn.innerHTML = `Siguiente Pantalla <i class="fa-solid fa-chevron-right"></i>`;
        nextBtn.className = "px-6 py-3 bg-[#CCFF00] hover:bg-[#b3e600] text-slate-950 font-extrabold text-xs font-mono rounded-xl transition-all shadow-lg";
    }
}

function nextExpPage() {
    const pages = explanationPages[currentTopic] || explanationPages[1];
    if (currentExpPage < pages.length - 1) {
        currentExpPage++;
        renderExpPage();
    } else {
        startExercises();
    }
}

function prevExpPage() {
    if (currentExpPage > 0) {
        currentExpPage--;
        renderExpPage();
    }
}

function startExercises() {
    currentExIndex = 0;
    document.getElementById('btn-ex-next').onclick = nextExercise;
    showScreen('screen-exercise');
    renderExercise();
}

function renderExercise() {
    const currentBank = exercisesBank[currentTopic] || exercisesBank[1];
    const ex = currentBank[currentExIndex];

    document.getElementById('ex-counter').innerText = `Ejercicio ${currentExIndex + 1} de ${currentBank.length}`;
    document.getElementById('ex-type-badge').innerText = "Actividad práctica";

    const body = document.getElementById('ex-body');
    const feedback = document.getElementById('ex-feedback');
    feedback.classList.add('hidden');
    delete feedback.dataset.answered;

    let html = `<p class="text-sm font-semibold text-white">${ex.question}</p>`;

    if (ex.options) {
        html += `<div class="space-y-2 pt-2">`;
        ex.options.forEach((opt, idx) => {
            html += `<button onclick="checkExOption(${idx}, ${ex.correct}, '${ex.explanation.replace(/'/g, "\\'")}')" class="w-full text-left p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 font-mono transition-all">${opt}</button>`;
        });
        html += `</div>`;
    } else if (ex.correctValue) {
        html += `
            <div class="space-y-3 pt-2">
                <input type="text" id="ex-input-val" placeholder="Escribe tu respuesta aquí..." class="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-cyan-300 font-mono">
                <button onclick="checkExInput('${ex.correctValue}', '${ex.explanation.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-cyan-500 text-black font-bold text-xs font-mono rounded-lg">Verificar Respuesta</button>
            </div>
        `;
    }

    body.innerHTML = html;
    document.getElementById('btn-ex-prev').style.visibility = currentExIndex === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-ex-next');
    
    if (currentExIndex === currentBank.length - 1) {
        nextBtn.innerText = "Completar Módulo";
    } else {
        nextBtn.innerHTML = `Siguiente Ejercicio <i class="fa-solid fa-chevron-right"></i>`;
    }
}

function checkExOption(selected, correct, explanation) {
    const feedback = document.getElementById('ex-feedback');
    if (feedback.dataset.answered) return;
    feedback.dataset.answered = '1';
    feedback.classList.remove('hidden');
    if (selected === correct) {
        feedback.className = "text-xs p-3 rounded-xl border bg-emerald-950/65 border-emerald-500/60 text-emerald-200";
        feedback.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> <strong>¡Correcto!</strong> ${explanation}`;
        userXP += 15;
        document.getElementById('user-xp').innerText = `${userXP} XP`;
    } else {
        feedback.className = "text-xs p-3 rounded-xl border bg-red-950/65 border-red-500/60 text-red-200";
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-400"></i> <strong>Incorrecto.</strong> ${explanation}`;
    }
}

function checkExInput(correctVal, explanation) {
    const val = document.getElementById('ex-input-val').value.trim().toLowerCase();
    const feedback = document.getElementById('ex-feedback');
    if (feedback.dataset.answered) return;
    feedback.dataset.answered = '1';
    feedback.classList.remove('hidden');

    if (val === correctVal.toLowerCase()) {
        feedback.className = "text-xs p-3 rounded-xl border bg-emerald-950/65 border-emerald-500/60 text-emerald-200";
        feedback.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> <strong>¡Correcto!</strong> ${explanation}`;
        userXP += 15;
        document.getElementById('user-xp').innerText = `${userXP} XP`;
    } else {
        feedback.className = "text-xs p-3 rounded-xl border bg-red-950/65 border-red-500/60 text-red-200";
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-400"></i> <strong>Incorrecto.</strong> ${explanation}`;
    }
}

function nextExercise() {
    const currentBank = exercisesBank[currentTopic] || exercisesBank[1];
    if (currentExIndex < currentBank.length - 1) {
        currentExIndex++;
        renderExercise();
    } else {
        goToMenu();
    }
}

function prevExercise() {
    if (currentExIndex > 0) {
        currentExIndex--;
        renderExercise();
    }
}

function startExamMode() {
    showScreen('screen-exercise');
    const q = mediumExamBank[Math.floor(Math.random() * mediumExamBank.length)];
    document.getElementById('ex-counter').innerText = "Examen Oficial (Dificultad Media)";
    document.getElementById('ex-type-badge').innerText = "Evaluación Aleatoria";

    let html = `<p class="text-sm font-semibold text-white">${q.question}</p><div class="space-y-2 pt-2">`;
    q.options.forEach((opt, idx) => {
        html += `<button onclick="checkExOption(${idx}, ${q.correct}, '${q.explanation.replace(/'/g, "\\'")}')" class="w-full text-left p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 font-mono transition-all">${opt}</button>`;
    });
    html += `</div>`;

    document.getElementById('ex-body').innerHTML = html;
    document.getElementById('ex-feedback').classList.add('hidden');
    delete document.getElementById('ex-feedback').dataset.answered;
    document.getElementById('btn-ex-prev').style.visibility = 'hidden';
    document.getElementById('btn-ex-next').innerHTML = `Siguiente Pregunta Media <i class="fa-solid fa-shuffle"></i>`;
    document.getElementById('btn-ex-next').onclick = startExamMode;
}