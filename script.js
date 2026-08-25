// ==================================================
// リンバスカンパニー囚人診断
// ==================================================

let currentQuestion = 0;

let scores = {
    isan: 0,
    faust: 0,
    don: 0,
    ryoshu: 0,
    meursault: 0,
    honglu: 0,
    heathcliff: 0,
    ishmael: 0,
    sinclair: 0,
    outis: 0,
    gregor: 0,
    rosmar: 0,
    dante: 0
};


// 回答履歴

let answerHistory = [];


// ==================================================
// 囚人情報
// ==================================================

const prisonerInfo = {

    isan: {
        name: "イサン",
        english: "YI SANG",
        color: "#777777"
    },

    faust: {
        name: "ファウスト",
        english: "FAUST",
        color: "#e8b6c8"
    },

    don: {
        name: "ドン・キホーテ",
        english: "DON QUIXOTE",
        color: "#e6c43c"
    },

    ryoshu: {
        name: "良秀",
        english: "RYŌSHŪ",
        color: "#d43b35"
    },

    meursault: {
        name: "ムルソー",
        english: "MEURSAULT",
        color: "#587b86"
    },

    honglu: {
        name: "ホンル",
        english: "HONG LU",
        color: "#73cfe5"
    },

    heathcliff: {
        name: "ヒースクリフ",
        english: "HEATHCLIFF",
        color: "#71607e"
    },

    ishmael: {
        name: "イシュメール",
        english: "ISHMAEL",
        color: "#e98a3a"
    },

    sinclair: {
        name: "シンクレア",
        english: "SINCLAIR",
        color: "#8b9b5b"
    },

    outis: {
        name: "ウーティス",
        english: "OUTIS",
        color: "#657457"
    },

    gregor: {
        name: "グレゴール",
        english: "GREGOR",
        color: "#7b5b46"
    },

    rosmar: {
        name: "ロージャ",
        english: "RODION",
        color: "#8f4646"
    },

    dante: {
        name: "ダンテ",
        english: "DANTE",
        color: "#6f2028"
    }

};


// ==================================================
// 囚人の並び順
// ==================================================
//
// 結果画面では
//
// イサン　　ファウスト　　ドン・キホーテ
// 良秀　　　ムルソー　　　ホンル
// ヒース　　イシュメール　ロージャ
// シンク　　ウーティス　　グレゴール
// 　　　　　　ダンテ
//
// の形になります。
// ==================================================

const prisonerOrder = [

    "isan",
    "faust",
    "don",

    "ryoshu",
    "meursault",
    "honglu",

    "heathcliff",
    "ishmael",
    "rosmar",

    "sinclair",
    "outis",
    "gregor",

    null,
    "dante",
    null

];


// ==================================================
// 回答
// ==================================================

const answers = [

    {
        value: 2,
        label: "強くそう思う"
    },

    {
        value: 1,
        label: "それなりにそう思う"
    },

    {
        value: 0,
        label: "どちらとも言えない"
    },

    {
        value: -1,
        label: "それなりに違う"
    },

    {
        value: -2,
        label: "強く違う"
    }

];


// ==================================================
// タイトル画面
// ==================================================

function showTitle() {

    document.getElementById("app").innerHTML = `

        <div class="screen title-screen">

            <div class="logo-small">
                LIMBUS COMPANY / PERSONALITY TEST
            </div>


            <h1 class="title">
                囚人診断
            </h1>


            <p class="subtitle">
                あなたは、どの囚人に近い？
            </p>


            <div class="prisoner-grid">

                ${prisonerOrder.map(key => {

                    if (key === null) {
                        return `<span class="empty"></span>`;
                    }

                    return `
                        <span
                            style="background:${prisonerInfo[key].color}"
                        ></span>
                    `;

                }).join("")}

            </div>


            <button
                class="start-button"
                onclick="startDiagnosis()"
            >
                診断を開始する
            </button>

        </div>

    `;

}


// ==================================================
// 診断開始
// ==================================================

function startDiagnosis() {

    currentQuestion = 0;


    scores = {

        isan: 0,
        faust: 0,
        don: 0,
        ryoshu: 0,
        meursault: 0,
        honglu: 0,
        heathcliff: 0,
        ishmael: 0,
        sinclair: 0,
        outis: 0,
        gregor: 0,
        rosmar: 0,
        dante: 0

    };


    answerHistory = [];


    showQuestion();

}


// ==================================================
// 質問表示
// ==================================================

function showQuestion() {

    const question =
        questions[currentQuestion];


    const progress =
        (currentQuestion / questions.length) * 100;


    let answerHTML = "";


    answers.forEach((answer, index) => {

        answerHTML += `

            <button
                class="answer-button"
                onclick="answerQuestion(${answer.value})"
            >

                <span class="answer-number">
                    ${index + 1}
                </span>


                <span class="answer-label">
                    ${answer.label}
                </span>

            </button>

        `;

    });


    // -----------------------------------------------
    // 戻るボタン
    // -----------------------------------------------

    let backButtonHTML = "";


    if (currentQuestion > 0) {

        backButtonHTML = `

            <button
                class="back-button"
                onclick="goBack()"
            >
                ← 前の質問へ戻る
            </button>

        `;

    }


    document.getElementById("app").innerHTML = `

        <div class="screen">


            <div class="question-header">

                <span>
                    LIMBUS COMPANY
                </span>


                <span>

                    QUESTION

                    ${String(
                        currentQuestion + 1
                    ).padStart(2, "0")}

                    /

                    ${String(
                        questions.length
                    ).padStart(2, "0")}

                </span>

            </div>


            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${progress}%"
                ></div>

            </div>


            <div class="question-card">


                <div class="question-number">

                    QUESTION

                    ${String(
                        currentQuestion + 1
                    ).padStart(2, "0")}

                </div>


                <h2 class="question-text">

                    ${question.text}

                </h2>


                <div class="answers">

                    ${answerHTML}

                </div>


                ${backButtonHTML}


            </div>


        </div>

    `;

}


// ==================================================
// 回答処理
// ==================================================

function answerQuestion(value) {

    const question =
        questions[currentQuestion];


    // -----------------------------------------------
    // 以前回答していた場合
    // -----------------------------------------------

    if (
        answerHistory[currentQuestion]
        !== undefined
    ) {

        const oldValue =
            answerHistory[currentQuestion];


        Object.keys(scores).forEach(key => {

            scores[key] -=
                oldValue *
                question.weights[key];

        });

    }


    // -----------------------------------------------
    // 新しい回答を記録
    // -----------------------------------------------

    answerHistory[currentQuestion] =
        value;


    // -----------------------------------------------
    // 点数加算
    // -----------------------------------------------

    Object.keys(scores).forEach(key => {

        scores[key] +=
            value *
            question.weights[key];

    });


    currentQuestion++;


    // -----------------------------------------------
    // 最後の質問なら結果へ
    // -----------------------------------------------

    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

    } else {

        showQuestion();

    }

}


// ==================================================
// 前の質問へ戻る
// ==================================================

function goBack() {

    if (currentQuestion <= 0) {
        return;
    }


    currentQuestion--;


    const question =
        questions[currentQuestion];


    const oldValue =
        answerHistory[currentQuestion];


    // -----------------------------------------------
    // 前の質問で加算された点数を取り消す
    // -----------------------------------------------

    if (oldValue !== undefined) {

        Object.keys(scores).forEach(key => {

            scores[key] -=
                oldValue *
                question.weights[key];

        });

    }


    answerHistory[currentQuestion] =
        undefined;


    showQuestion();

}


// ==================================================
// 結果表示
// ==================================================

function showResult() {


    const ranking =
        Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);


    // -----------------------------------------------
    // 1位
    // -----------------------------------------------

    const first =
        ranking[0][0];


    const result =
        prisonerInfo[first];


    // -----------------------------------------------
    // 最大値・最小値
    // -----------------------------------------------

    const values =
        Object.values(scores);


    const maxScore =
        Math.max(...values);


    const minScore =
        Math.min(...values);


    // -----------------------------------------------
    // ランキングHTML
    // -----------------------------------------------

    let rankingHTML = "";


    ranking.forEach(
        ([prisoner, score], index) => {

            const info =
                prisonerInfo[prisoner];


            let percentage = 4;


            if (maxScore !== minScore) {

                percentage =
                    (
                        (score - minScore)
                        /
                        (maxScore - minScore)
                    ) * 100;

                percentage =
                    Math.max(
                        4,
                        percentage
                    );

            }


            rankingHTML += `

                <div
                    class="rank-row"
                >

                    <div class="rank-info">

                        <span class="rank-name">

                            <span
                                class="rank-number"
                            >
                                ${index + 1}.
                            </span>

                            ${info.name}

                        </span>


                        <span
                            class="rank-score"
                        >
                            ${score} pt
                        </span>

                    </div>


                    <div
                        class="score-background"
                    >

                        <div
                            class="score-bar"
                            style="
                                width:${percentage}%;
                                background:${info.color};
                                box-shadow:
                                    0 0 12px
                                    ${info.color}88;
                            "
                        ></div>

                    </div>

                </div>

            `;

        }
    );


    // -----------------------------------------------
    // 結果画面
    // -----------------------------------------------

    document.getElementById("app").innerHTML = `

        <div
            class="screen result-screen"
        >


            <div class="result-label">

                YOUR RESULT

            </div>


            <h1
                class="result-finger"
                style="
                    color:${result.color};
                "
            >

                ${result.name}

            </h1>


            <div
                class="result-subtitle"
            >

                ${result.english}

            </div>


            <div class="ranking">


                <div class="ranking-title">

                    PRISONERS / RANKING

                </div>


                <div class="result-grid">

                    ${rankingHTML}

                </div>


            </div>


            <button
                class="retry-button"
                onclick="showTitle()"
            >

                もう一度診断する

            </button>


        </div>

    `;

}


// ==================================================
// 最初の画面を表示
// ==================================================

showTitle();
