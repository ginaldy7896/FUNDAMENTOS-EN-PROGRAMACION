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

const explanationPages = {
    1: [
        {
            badge: "Pantalla 1 de 3 | Concepto de Variables",
            html: `
                <p class="font-bold text-cyan-300">1. Variables: Las "Cajas" de la Memoria 📦</p>
                <p>Para que una computadora pueda resolver algo, primero necesita recordar datos. Una variable es simplemente un espacio en la memoria de la computadora al que le ponemos un nombre y donde guardamos un valor.</p>
                <div class="bg-slate-900 p-2.5 rounded border border-cyan-800 text-[11px]">
                    <strong>💡 Metáfora de la Caja:</strong> Si escribes <code class="text-cyan-300">edad = 20</code>, creas una caja llamada <strong>edad</strong> y guardas el número <strong>20</strong> dentro.
                </div>
                <div class="bg-cyan-950/60 p-2 rounded border border-cyan-700/50 font-mono text-[11px] flex justify-between">
                    <span class="text-cyan-300">🔎 Analizador en Vivo:</span>
                    <span class="text-yellow-300">Variable: <strong>edad</strong> | Valor: <strong>20</strong></span>
                </div>
            `
        },
        {
            badge: "Pantalla 2 de 3 | Video Demostrativo",
            html: `
                <p class="font-bold text-cyan-300">Video Explicativo de PyBot 🎥</p>
                <div class="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/chPhlsHoEBs?cc_load_policy=1" title="Variables" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="text-[11px] text-slate-300">Recuerda las reglas clave: los nombres de variables nunca empiezan por números ni llevan espacios ni guiones medios.</p>
            `
        },
        {
            badge: "Pantalla 3 de 3 | Preparación Práctica",
            html: `
                <p class="font-bold text-cyan-300">¡Listo para la Acción Práctica! ⚡</p>
                <p>Has comprendido la teoría fundamental de las variables en Python. PyBot ha preparado los <strong>7 ejercicios autocorregibles sencillos</strong> para comprobar tus habilidades.</p>
                <p class="text-cyan-300 font-medium">Haz clic en el botón inferior para comenzar los ejercicios prácticos uno por uno.</p>
            `
        }
    ],
    2: [
        {
            badge: "Pantalla 1 de 3 | Tipos de Operadores",
            html: `
                <p class="font-bold text-purple-300">2. Operadores: Herramientas de Manipulación ⚙️</p>
                <p>Permiten modificar y comparar datos en la memoria a través de tres grandes familias: Aritméticos (<code class="text-purple-300">+ - * / // % **</code>), de Comparación (<code class="text-purple-300">== != > <</code>) y Lógicos (<code class="text-purple-300">and or not</code>).</p>
            `
        },
        {
            badge: "Pantalla 2 de 3 | Video de Operadores",
            html: `
                <p class="font-bold text-purple-300">Video tutorial de operadores aritméticos y lógicos:</p>
                <div class="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/chPhlsHoEBs?cc_load_policy=1" title="Operadores" frameborder="0" allowfullscreen></iframe>
                </div>
            `
        },
        {
            badge: "Pantalla 3 de 3 | Preparación Práctica",
            html: `
                <p class="font-bold text-purple-300">¡Conceptos de operadores revisados con éxito!</p>
                <p>Estás preparado para poner a prueba el manejo de operadores aritméticos y lógicos.</p>
            `
        }
    ],
    3: [
        {
            badge: "Pantalla 1 de 3 | Procesamiento y Salida",
            html: `
                <p class="font-bold text-emerald-300">3. Procesamiento y Salida: La Lógica en Acción 🚀</p>
                <p>El procesamiento aplica una secuencia ordenada de operadores siguiendo la jerarquía matemática (Paréntesis, Potencias, Multiplicación/División, Suma/Resta). La función <code class="text-emerald-300 font-mono">print()</code> comunica el resultado final en pantalla.</p>
            `
        },
        {
            badge: "Pantalla 2 de 3 | Video de Procesamiento",
            html: `
                <p class="font-bold text-emerald-300">Video tutorial de flujo de procesamiento:</p>
                <div class="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-black my-2">
                    <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/chPhlsHoEBs?cc_load_policy=1" title="Procesamiento" frameborder="0" allowfullscreen></iframe>
                </div>
            `
        },
        {
            badge: "Pantalla 3 de 3 | Preparación Práctica",
            html: `
                <p class="font-bold text-emerald-300">¡Teoría de Procesamiento y Salida completada!</p>
                <p>PyBot te guiará ahora por los ejercicios prácticos interactivos de este módulo.</p>
            `
        }
    ]
};

const simpleExercises = [
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
];

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

function startTopic(topicId) {
    currentTopic = topicId;
    currentExpPage = 0;
    showScreen('screen-explanation');
    renderExpPage();
}

function renderExpPage() {
    const pages = explanationPages[currentTopic] || explanationPages[1];
    const data = pages[currentExpPage];

    document.getElementById('exp-badge').innerText = `Pantalla ${currentExpPage + 1} de 3`;
    document.getElementById('exp-content').innerHTML = data.html;

    document.getElementById('btn-exp-prev').style.visibility = currentExpPage === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-exp-next');
    
    if (currentExpPage === pages.length - 1) {
        nextBtn.innerHTML = `¡Poner a prueba lo aprendido! <i class="fa-solid fa-rocket"></i>`;
        nextBtn.className = "px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs font-mono rounded-lg transition-all shadow-lg";
    } else {
        nextBtn.innerHTML = `Siguiente Pantalla <i class="fa-solid fa-chevron-right"></i>`;
        nextBtn.className = "px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono rounded-lg transition-all";
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
    showScreen('screen-exercise');
    renderExercise();
}

function renderExercise() {
    const ex = simpleExercises[currentExIndex];
    document.getElementById('ex-counter').innerText = `Ejercicio ${currentExIndex + 1} de ${simpleExercises.length}`;
    document.getElementById('ex-type-badge').innerText = ex.title;

    const body = document.getElementById('ex-body');
    const feedback = document.getElementById('ex-feedback');
    feedback.classList.add('hidden');

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
    if (currentExIndex === simpleExercises.length - 1) {
        nextBtn.innerText = "Completar Módulo";
    } else {
        nextBtn.innerHTML = `Siguiente Ejercicio <i class="fa-solid fa-chevron-right"></i>`;
    }
}

function checkExOption(selected, correct, explanation) {
    const feedback = document.getElementById('ex-feedback');
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
    if (currentExIndex < simpleExercises.length - 1) {
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
    document.getElementById('btn-ex-prev').style.visibility = 'hidden';
    document.getElementById('btn-ex-next').innerHTML = `Siguiente Pregunta Media <i class="fa-solid fa-shuffle"></i>`;
    document.getElementById('btn-ex-next').onclick = startExamMode;
}