// ==================================================
// リンバスカンパニー囚人診断：質問データ
// ==================================================
//
// ★質問の文章や配点を変更するときは、基本的に
// このファイルだけ編集すればOKです。
//
// 現在は全員0点にしてあります。
// あとから weights の数字を自由に設定してください。
//
// 回答による倍率
// 強くそう思う       → +2
// それなりにそう思う → +1
// どちらとも言えない →  0
// それなりに違う     → -1
// 強く違う           → -2
// ==================================================

const questions = [

    {
        text: "もし人に理不尽に責め立てられても、強く言い返すことが出来ない。",
        weights: {
            isan: 3,
            faust: 1,
            don: -3,
            ryoshu: -2,
            meursault: 2,
            honglu: -1,
            heathcliff: -3,
            ishmael: -3,
            sinclair: 3,
            outis: -3,
            gregor: 2,
            rosmar: -1,
            dante: 3
        }
    },

    {
        text: "人に媚びを売ったり任せるよりは、自分で先導して何かをしたい。",
        weights: {
            isan: -2,
            faust: 1,
            don: 2,
            ryoshu: 2,
            meursault: -3,
            honglu: 1,
            heathcliff: 2,
            ishmael: 3,
            sinclair: -1,
            outis: -2,
            gregor: -2,
            rosmar: -1,
            dante: 1
        }
    },

    {
        text: "確実な定型よりも、不確実のある挑戦の方がワクワクする。",
        weights: {
            isan: -1,
            faust: 3,
            don: 2,
            ryoshu: 2,
            meursault: -3,
            honglu: 2,
            heathcliff: 2,
            ishmael: -3,
            sinclair: -2,
            outis: -2,
            gregor: -1,
            rosmar: 3,
            dante: 0
        }
    },

    {
        text: "なろう系とかのいわゆる特別な主人公に自己投影しがちだ。",
        weights: {
            isan: -2,
            faust: -3,
            don: 3,
            ryoshu: -1,
            meursault: -2,
            honglu: -2,
            heathcliff: -1,
            ishmael: 2,
            sinclair: 2,
            outis: 1,
            gregor: 1,
            rosmar: 3,
            dante: 2
        }
    },

    {
        text: "正直、自分は誰かに忘れられたり、凡庸であることを恐れてると思う。",
        weights: {
            isan: -1,
            faust: 1,
            don: 2,
            ryoshu: -1,
            meursault: 0,
            honglu: -3,
            heathcliff: -1,
            ishmael: -2,
            sinclair: 2,
            outis: -2,
            gregor: 3,
            rosmar: 3,
            dante: 1
        }
    },

    {
        text: "時には、知識や典礼ではなく感情が物事を進めることもあると思う。",
        weights: {
            isan: -2,
            faust: -2,
            don: 2,
            ryoshu: 1,
            meursault: -3,
            honglu: 3,
            heathcliff: 2,
            ishmael: -1,
            sinclair: 1,
            outis: -2,
            gregor: -1,
            rosmar: 1,
            dante: 3
        }
    },

    {
        text: "自分には他の人に知られていない側面があると思う。",
        weights: {
            isan: -2,
            faust: -1,
            don: -2,
            ryoshu: -2,
            meursault: 1,
            honglu: 2,
            heathcliff: -2,
            ishmael: -1,
            sinclair: 1,
            outis: 3,
            gregor: 2,
            rosmar: 3,
            dante: 1
        }
    },

    {
        text: "誰かを信頼したり愛することは何も悪くないと思う。",
        weights: {
            isan: 1,
            faust: 0,
            don: 1,
            ryoshu: 3,
            meursault: -2,
            honglu: 1,
            heathcliff: 3,
            ishmael: 2,
            sinclair: 2,
            outis: 1,
            gregor: 1,
            rosmar: -2,
            dante: 2
        }
    },

    {
        text: "自分はよく嫉妬される人物である。",
        weights: {
            isan: 1,
            faust: 3,
            don: 1,
            ryoshu: 2,
            meursault: -1,
            honglu: 3,
            heathcliff: -3,
            ishmael: -1,
            sinclair: 1,
            outis: 1,
            gregor: -2,
            rosmar: -3,
            dante: 1
        }
    },

    {
        text: "元々関係のあった友人や恋人、上司などのことを未だに考えている。",
        weights: {
            isan: 1,
            faust: -2,
            don: -1,
            ryoshu: 3,
            meursault: 1,
            honglu: -2,
            heathcliff: 3,
            ishmael: 2,
            sinclair: 1,
            outis: 1,
            gregor: 2,
            rosmar: 1,
            dante: -3
        }
    },

    {
        text: "なんとなく人生をぼんやりとしか捉えてないことが多々ある。",
        weights: {
            isan: 3,
            faust: -1,
            don: -2,
            ryoshu: -2,
            meursault: 3,
            honglu: 3,
            heathcliff: -2,
            ishmael: -3,
            sinclair: 1,
            outis: -2,
            gregor: 3,
            rosmar: 2,
            dante: 3
        }
    },

    {
        text: "もし友達や仲間がいじめられていたりしたら、すぐに止めたり助けに行ってしまう方だ。",
        weights: {
            isan: 1,
            faust: -1,
            don: 3,
            ryoshu: -2,
            meursault: 0,
            honglu: -2,
            heathcliff: -2,
            ishmael: -1,
            sinclair: 2,
            outis: -1,
            gregor: 2,
            rosmar: -1,
            dante: 3
        }
    },

    {
        text: "責任感はそれなりにある方だと思っている。",
        weights: {
            isan: -2,
            faust: -1,
            don: 1,
            ryoshu: -1,
            meursault: 2,
            honglu: -1,
            heathcliff: -2,
            ishmael: 1,
            sinclair: 2,
            outis: 1,
            gregor: 2,
            rosmar: -3,
            dante: 3
        }
    },

    {
        text: "都合が悪いとついその場で嘘をついてしまうことがある。",
        weights: {
            isan: 2,
            faust: 1,
            don: -3,
            ryoshu: -2,
            meursault: -3,
            honglu: -1,
            heathcliff: 1,
            ishmael: 1,
            sinclair: 3,
            outis: -1,
            gregor: 1,
            rosmar: 3,
            dante: -1
        }
    },

    {
        text: "考えるより先に行動が先走ってしまうことがある。",
        weights: {
            isan: -1,
            faust: -3,
            don: 3,
            ryoshu: 2,
            meursault: -3,
            honglu: -2,
            heathcliff: 3,
            ishmael: 3,
            sinclair: 2,
            outis: 2,
            gregor: -1,
            rosmar: 1,
            dante: -1
        }
    },

    {
        text: "正直こういう診断をプレイしたりするのが大好きだ。",
        weights: {
            isan: 1,
            faust: 1,
            don: 2,
            ryoshu: -1,
            meursault: -1,
            honglu: 2,
            heathcliff: 0,
            ishmael: 0,
            sinclair: 3,
            outis: 1,
            gregor: 2,
            rosmar: 3,
            dante: 2
        }
    },

    {
        text: "自分は周りより優れている人物だと思う。",
        weights: {
            isan: 1,
            faust: 3,
            don: 1,
            ryoshu: 1,
            meursault: 2,
            honglu: 1,
            heathcliff: -1,
            ishmael: 1,
            sinclair: -1,
            outis: 3,
            gregor: -2,
            rosmar: -1,
            dante: -2
        }
    },

    {
        text: "遊園地などに来たら道順なんて気にせず好奇心のまま進むタイプだ。",
        weights: {
            isan: 1,
            faust: -1,
            don: 3,
            ryoshu: 1,
            meursault: -3,
            honglu: 1,
            heathcliff: 2,
            ishmael: -2,
            sinclair: 2,
            outis: -2,
            gregor: 1,
            rosmar: 2,
            dante: -1
        }
    },

    {
        text: "普通の人よりも自分は世間や外のことに知識があったり詳しいと感じる。",
        weights: {
            isan: -1,
            faust: 3,
            don: -1,
            ryoshu: 2,
            meursault: 2,
            honglu: 2,
            heathcliff: -1,
            ishmael: 1,
            sinclair: -2,
            outis: 3,
            gregor: 1,
            rosmar: 2,
            dante: -3
        }
    },

    {
        text: "物事をうやむやにしたり曖昧にすることはしたくない。",
        weights: {
            isan: -1,
            faust: -1,
            don: 3,
            ryoshu: 1,
            meursault: 2,
            honglu: -1,
            heathcliff: 2,
            ishmael: 3,
            sinclair: -2,
            outis: 3,
            gregor: -2,
            rosmar: -2,
            dante: 1
        }
    }

];
