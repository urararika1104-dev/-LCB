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
        }
    },

    {
        text: "人に媚びを売ったり任せるよりは、自分で先導して何かをしたい。",
        weights: {
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
        }
    },

    {
        text: "確実な定型よりも、不確実のある挑戦の方がワクワクする。",
        weights: {
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
        }
    },

    {
        text: "なろう系とかのいわゆる特別な主人公に自己投影しがちだ。",
        weights: {
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
        }
    },

    {
        text: "正直、自分は誰かに忘れられたり、凡庸であることを恐れてると思う。",
        weights: {
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
        }
    },

    {
        text: "時には、知識や典礼ではなく感情が物事を進めることもあると思う。",
        weights: {
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
        }
    },

    {
        text: "自分には他の人に知られていない側面があると思う。",
        weights: {
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
        }
    },

    {
        text: "誰かを信頼したり愛することは何も悪くないと思う。",
        weights: {
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
        }
    },

    {
        text: "自分はよく嫉妬される人物である。",
        weights: {
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
        }
    },

    {
        text: "元々関係のあった友人や恋人、上司などのことを未だに考えている。",
        weights: {
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
        }
    },

    {
        text: "なんとなく人生をぼんやりとしか捉えてないことが多々ある。",
        weights: {
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
        }
    },

    {
        text: "もし友達や仲間がいじめられていたりしたら、すぐに止めたり助けに行ってしまう方だ。",
        weights: {
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
        }
    },

    {
        text: "責任感はそれなりにある方だと思っている。",
        weights: {
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
        }
    },

    {
        text: "都合が悪いとついその場で嘘をついてしまうことがある。",
        weights: {
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
        }
    },

    {
        text: "考えるより先に行動が先走ってしまうことがある。",
        weights: {
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
        }
    },

    {
        text: "正直こういう診断をプレイしたりするのが大好きだ。",
        weights: {
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
        }
    },

    {
        text: "自分は周りより優れている人物だと思う。",
        weights: {
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
        }
    },

    {
        text: "遊園地などに来たら道順なんて気にせず好奇心のまま進むタイプだ。",
        weights: {
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
        }
    },

    {
        text: "普通の人よりも自分は世間や外のことに知識があったり詳しいと感じる。",
        weights: {
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
        }
    },

    {
        text: "物事をうやむやにしたり曖昧にすることはしたくない。",
        weights: {
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
        }
    }

];
