import "../assets/demo/category.css"

function CategoriesCard(props) {
    return (
        <div className="block block--category">
            <div class="block-container">
                <h2 class="block-header">
                    <a href="/#public-figure-gossip.1">Public Figure Gossip</a>
                </h2>
                <div class="block-body">
                    <div class="node node--id3 node--depth2 node--forum node--unread">
                        <div class="node-body">
                            <span class="node-icon" aria-hidden="true"><svg style={{fontSize: "20px;",color:"brown"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"></path></svg></span>
                            <div class="node-main js-nodeMain">
                                <h3 class="node-title">
                                    <a href="/forum" data-xf-init="element-tooltip"
                                        data-shortcut="node-description">Families</a>
                                </h3>
                                <div class="node-meta">
                                    <div class="node-statsMeta">
                                        <dl class="pairs pairs--inline">
                                            <dt>Posts</dt>
                                            <dd>1.8M</dd>
                                        </dl>
                                        <dl class="pairs pairs--inline">
                                            <dt>Views</dt>
                                            <dd>204.2M</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="node-stats">
                                <dl class="pairs pairs--rows">
                                    <dt>Threads</dt>
                                    <dd>2K</dd>
                                </dl>
                                <dl class="pairs pairs--rows">
                                    <dt>Messages</dt>
                                    <dd>1.8M</dd>
                                </dl>
                                <dl class="pairs pairs--rows">
                                    <dt>Views</dt>
                                    <dd>204.2M</dd>
                                </dl>
                            </div>
                            <div class="node-extra">
                                <div class="node-extra-icon">
                                    <a href="/members/grammacloud.347482/"
                                        class="avatar avatar--xs avatar--default avatar--default--dynamic" data-user-id="347482"
                                        >
                                        <span class="avatar-u347482-s">G</span>
                                    </a>
                                </div>
                                <div class="node-extra-row">
                                    <a href="/threads/autistic-interpretations-11-bessys-family-is-batshit-crazy-manipulators-extremely-lazy.37892/post-14405081"
                                        class="node-extra-title"
                                        title="Autistic Interpretations #11 Bessy’s family is batshit crazy, manipulator’s &amp; extremely lazy">Autistic
                                        Interpretations #11 Bessy’s family is batshit crazy, manipulator’s &amp; extremely
                                        lazy</a>
                                </div>
                                <div class="node-extra-row">
                                    <ul class="listInline listInline--bullet">
                                        <li><time class="node-extra-date u-dt" dir="auto" datetime="2023-03-17T02:29:30+0000"
                                                data-time="1679020170" data-date-string="Mar 17, 2023"
                                                data-time-string="2:29 AM" title="Mar 17, 2023 at 2:29 AM">18 minutes ago</time>
                                        </li>
                                        <li class="node-extra-user"><a href="/members/grammacloud.347482/" class="username "
                                                dir="auto" data-user-id="347482">grammacloud</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard;