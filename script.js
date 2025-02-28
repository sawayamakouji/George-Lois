// スクロール関連の変数
let autoScrollActive = false;
let scrollSpeed = 1; // スクロール速度（大きくすると速くなる）
let scrollInterval;

// 自動スクロール開始
function startAutoScroll() {
    if (autoScrollActive) return; // すでに動作中なら何もしない
    autoScrollActive = true;
    
    scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed); // Y軸方向にscrollSpeedピクセルずつスクロール
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            clearInterval(scrollInterval); // 最後まで行ったら止める
        }
    }, 20); // 20msごとにスクロール
}

// ユーザーがスクロールを開始したら、自動スクロールを発動（PC）
document.addEventListener("wheel", () => {
    startAutoScroll();
});

// スマホ対応（タッチイベントでスクロール開始）
document.addEventListener("touchstart", () => {
    startAutoScroll();
});

// ユーザーが手動でスクロールした場合は、自動スクロールを停止
document.addEventListener("wheel", () => {
    clearInterval(scrollInterval);
    autoScrollActive = false;
}, { once: true }); // 一度手動スクロールしたら停止

document.addEventListener("touchmove", () => {
    clearInterval(scrollInterval);
    autoScrollActive = false;
}, { once: true }); // スマホで手動スクロールしたら停止


const quotes = [

  { jp: "あなたのアイデアが誰にも反対されないなら、それはただの平凡なアイデアだ。",
      en: "If your idea doesn’t get rejected at first, it’s probably an ordinary idea." },

    { jp: "自分の仕事が好きなら、月曜の朝が楽しみになるはずだ。",
      en: "If you love what you do, Monday morning is a joy." },

    { jp: "「前例がないからできない」と言われたら、それが成功する証拠だ。",
      en: "If they say ‘It’s never been done before,’ that’s proof it will work." },

    { jp: "広告は騙すものではない。真実を刺激的に語るものだ。",
      en: "Advertising is not about deception. It's about telling the truth in a compelling way." },

    { jp: "広告の目的は、人々に『これが欲しい』と思わせることではない。『これがないとダメだ！』と思わせることだ。",
      en: "The purpose of advertising is not to make people want something. It's to make them feel they can't live without it." },

    { jp: "戦略は大事だが、退屈な戦略ほど無意味なものはない。",
      en: "Strategy is important, but nothing is more useless than a boring strategy." },

    { jp: "優れたアイデアは常にシンプルだ。しかし、シンプルなアイデアを生み出すのは難しい。",
      en: "Great ideas are always simple. But coming up with a simple idea is damn hard." },

    { jp: "本当にクリエイティブな人間は、子供のような視点を持ち続ける。",
      en: "Truly creative people maintain a childlike perspective on the world." },

    { jp: "もし誰かが『そんなことはできない』と言ったら、絶対にやるべきだ。",
      en: "If someone says, 'You can't do that,' you absolutely must do it." },

    { jp: "企業の目的は利益を生み出すことではない。意味を生み出すことだ。",
      en: "A company’s goal is not to generate profit. It’s to generate meaning." },

    { jp: "会議で出る『安全な案』は全て捨てろ。それは誰にも届かない。",
      en: "Throw away every 'safe idea' from a meeting. It won’t reach anyone." },

    { jp: "クリエイティブな人間にとって、最高の学びは失敗だ。",
      en: "For creative people, the best teacher is failure." },

    { jp: "『バズらせる』ことが目的の広告は、すぐに消える。文化を作ることを考えろ。",
      en: "Ads made to 'go viral' disappear quickly. Think about creating culture instead." },

    { jp: "自分のアイデアを守るためなら、戦え。そして、勝て。",
      en: "Fight for your ideas. And win." },

    { jp: "広告は美しくなくてはならない。しかし、美しいだけではダメだ。",
      en: "Advertising must be beautiful. But beauty alone is not enough." },

    { jp: "最高のブランディングとは、ロゴやキャッチコピーではない。それを語る人々の熱量だ。",
      en: "The best branding isn't a logo or a slogan. It’s the passion people have when they talk about it." },

    { jp: "「売る」ことは目的ではない。「共感」を生むことが目的だ。",
      en: "Selling is not the goal. Creating empathy is." },

    { jp: "『このアイデアは狂ってる』と言われたら、実現のチャンスだ。",
      en: "If they say, 'This idea is crazy,' you’ve got a real shot at making it work." },

    { jp: "広告は芸術ではない。しかし、芸術のように人々の心を動かさなければならない。",
      en: "Advertising is not art. But it must move people like art." },

    { jp: "ルールを破れ。型にはまったものは、型通りの結果しか生まない。",
      en: "Break the rules. A formulaic approach yields only formulaic results." },

    { jp: "良いアイデアはデータからは生まれない。直感と本能を信じること。",
      en: "Good ideas don't come from data. Trust your intuition and instincts." },

    { jp: "普通の広告は誰の記憶にも残らない。",
      en: "Ordinary ads leave no memory." },

    { jp: "広告とは、人々の感情を動かし、行動を促すものである。",
      en: "Advertising is about moving emotions and prompting action." },

    { jp: "競争ではなく、独自の市場を作れ。",
      en: "Don't compete. Create your own market." },

    { jp: "人々は論理では動かない。感情が動いたときに行動する。",
      en: "People don't move by logic. They move when emotions are stirred." },

    { jp: "広告の最大の敵は『誰もが受け入れるつまらなさ』。",
      en: "The biggest enemy of advertising is boring acceptance by everyone." },

    { jp: "『ありえない』と言われたアイデアこそ、試してみる価値がある。",
      en: "The ideas people call 'impossible' are the ones worth trying." },

    { jp: "『批判される広告は成功の証』。全員に好かれる広告は、誰の心にも届かない。",
      en: "Criticized ads are a sign of success. Ads that please everyone reach no one." },

    { jp: "最高の広告は、人々のリアルな会話の中に隠れている。",
      en: "The best ads are hidden in real conversations among people." },

    { jp: "『どうやって売るか』ではなく、『どうすれば語りたくなるか』を考えろ。",
      en: "Don't think 'how to sell it', think 'how to make people talk about it'." },

    { jp: "先入観を捨てろ。アイデアは『当たり前の破壊』から生まれる。",
      en: "Drop your preconceptions. Ideas are born from breaking the obvious." },

    { jp: "広告の役割は、人の感情を動かすこと。ロジックではない。",
      en: "The role of advertising is to move emotions, not logic." },

    { jp: "競争ではなく『市場を変える』ことを考えろ。",
      en: "Don't compete. Change the market itself." },

    { jp: "今のトレンドに乗るな。次のトレンドを作れ。",
      en: "Don't follow trends. Create the next one." },

    { jp: "失敗を恐れるな。失敗しない広告は、誰にも記憶されない。",
      en: "Don't fear failure. Ads that never fail are ads no one remembers." },

    { jp: "『笑わせるか、泣かせるか、怒らせるか』。感情が動かない広告は死んでいる。",
      en: "Make them laugh, cry, or get angry. Ads that don't stir emotions are dead." },

    { jp: "広告は人を操るものではない。人をワクワクさせるものだ。",
      en: "Advertising is not about manipulating people. It's about exciting them." },

    { jp: "広告とは、消費者の記憶に住み着くアートである。",
      en: "Advertising is art that lives in the consumer's memory." },

    { jp: "広告は、企業のためにあるのではない。世界のためにある。",
      en: "Advertising is not for companies. It's for the world." },

    { jp: "広告は売るためのものではなく、文化をつくるためのものだ。",
      en: "Advertising is not to sell. It's to build culture." },

    { jp: "ブランドとは、企業が言うものではない。人々が語るものである。",
      en: "A brand is not what a company says. It’s what people say about it." },

    { jp: "商品を売るな。物語を語れ。",
      en: "Don't sell products. Tell stories." },

    { jp: "広告が広告だと気づかれた瞬間、それは失敗だ。",
      en: "The moment an ad is recognized as an ad, it has failed." },

    { jp: "広告とは、社会の潜在意識を書き換えるものである。",
      en: "Advertising is about rewriting the collective subconscious of society." },

    { jp: "クリエイティブとは、論理とカオスの間にある。",
      en: "Creativity exists between logic and chaos." },

    { jp: "マーケティングは売ることではなく、信念を共有することだ。",
      en: "Marketing is not about selling. It’s about sharing beliefs." },

    { jp: "世界を変えたければ、広告を変えろ。",
      en: "If you want to change the world, change advertising." }
];
// 名言リスト（quotes 配列）はここに省略して追加）

// 配列をシャッフルする関数（Fisher-Yates アルゴリズム）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
        [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
    }
}

// ページをリロードするたびにシャッフル
shuffleArray(quotes);

const quoteContainer = document.getElementById("quote-container");

// 名言をHTMLに追加
quotes.forEach(quote => {
    const section = document.createElement("div");
    section.classList.add("quote-section");

    section.innerHTML = `
        <p class="quote">${quote.jp}</p>
        <span>${quote.en}</span>
    `;

    quoteContainer.appendChild(section);
});

// スクロール時のアニメーション適用
document.addEventListener("scroll", function() {
    document.querySelectorAll(".quote-section").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
            section.classList.add("reveal");
        }
    });
});

// フェードインするエフェクト（CSSと連携）
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".main-title").classList.add("reveal");
    }, 500);
});
