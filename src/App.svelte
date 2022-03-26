<script lang="ts">
    import avatar from "./assets/avatar.jpg";
</script>

<main>
    <h2>わたしについて</h2>
    <p>
        ekuinox です。<br>
        音楽を聴いたり、漫画を読んだり、散歩に出かけたりなどしています。
    </p>
    <dl>
        <dt>Avatar</dt>
        <dd>
            <img src={avatar} alt="my-avatar" id="avatar" width="50em" />
        </dd>
        <dd>
            こちらのアイコンは若鶏にこみ先生(<a
                href="https://twitter.com/tori_nico2">@tori_nico2</a
            >)に描いていただきました [<a
                href="https://skeb.jp/@tori_nico2/works/1">skeb</a
            >]
        </dd>
        <dt>好きなもの</dt>
        <dd><strong>どうして私が美術科に!?</strong></dd>
        <dd>きんいろモザイク</dd>
        <dd>放課後すとりっぷ</dd>
        <dd><strong>Aiobahn</strong></dd>
        <dd>RetroVision</dd>
        <dd>Former Hero</dd>
        <dd>めりけんやの鶏天ぶっかけうどん</dd>
        <dd>斜張橋</dd>
        <dt>ほか名前</dt>
        <dd>remokusu</dd>
    </dl>
    <h2>リンクとか</h2>
    <dl>
        <dt>Twitter</dt>
        <dd>
            <a href="https://twitter.com/remokusu">remokusu</a>
        </dd>
        <dt>GitHub</dt>
        <dd>
            <a href="https://github.com/ekuinox">ekuinox</a>
        </dd>
        <dt>Steam</dt>
        <dd>
            <a href="https://steamcommunity.com/id/lm0x">lm0x</a>
        </dd>
        <dt>Note</dt>
        <dd>
            <a href="https://note.com/lm9">lm9</a>
        </dd>
        <dt>email</dt>
        <dd>
            <a href="mailto:depkey@me.com">depkey@me.com</a>
        </dd>
    </dl>
    <h2>つくったもの</h2>
    <dl>
        <dt>
            <a href="https://github.com/mcymze/Khaos">Khaos</a>
        </dt>
        <dd>Kotlinで実装したSpigot向けのDigAll</dd>
        <dt>
            <a href="https://github.com/ekuinox/fanza-total-spending-extension"
                >fanza-total-spending-extension</a
            >
        </dt>
        <dd>FANZA での購入総額を取得する Chrome 拡張</dd>
        <dt>
            <a href="https://github.com/ekuinox/twitter-account-status-exporter"
                >twitter-account-status-exporter</a
            >
        </dt>
        <dd>
            Twitter のアカウントが凍結されているかなどを Prometheus
            のメトリクスとして扱うやつ
        </dd>
        <dt>
            <a href="https://github.com/ekuinox/goshuin">goshuin</a>
        </dt>
        <dd>御朱印を地図上にマッピングする Web アプリ</dd>
        <dd>
            <a href="https://goshuinmap.ekuinox.dev">goshuinmap.ekuinox.dev</a
            >より私のマップが確認できます
        </dd>
    </dl>
</main>

<style>
    #avatar {
        border-radius: 5em;
    }
</style>
