'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">repositorios documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link" >AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AboutPageModule-ea20b77a0de51532b4e4adeeddddf36e013f402f9088dc748b491acd09cad6a393fa485d19cf737513f97c69e03c3389efe31e8103515a7cfaf0665533cc7f28"' : 'data-bs-target="#xs-components-links-module-AboutPageModule-ea20b77a0de51532b4e4adeeddddf36e013f402f9088dc748b491acd09cad6a393fa485d19cf737513f97c69e03c3389efe31e8103515a7cfaf0665533cc7f28"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-ea20b77a0de51532b4e4adeeddddf36e013f402f9088dc748b491acd09cad6a393fa485d19cf737513f97c69e03c3389efe31e8103515a7cfaf0665533cc7f28"' :
                                            'id="xs-components-links-module-AboutPageModule-ea20b77a0de51532b4e4adeeddddf36e013f402f9088dc748b491acd09cad6a393fa485d19cf737513f97c69e03c3389efe31e8103515a7cfaf0665533cc7f28"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutPageRoutingModule.html" data-type="entity-link" >AboutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7b77b679e39355238701943142ff080c1327537263c77b35ac63689e9e229638621e5cf78d6ea45ae568ceaa88e657dc953a9b3bb889edcc70b164c8101c9f9f"' : 'data-bs-target="#xs-components-links-module-AppModule-7b77b679e39355238701943142ff080c1327537263c77b35ac63689e9e229638621e5cf78d6ea45ae568ceaa88e657dc953a9b3bb889edcc70b164c8101c9f9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7b77b679e39355238701943142ff080c1327537263c77b35ac63689e9e229638621e5cf78d6ea45ae568ceaa88e657dc953a9b3bb889edcc70b164c8101c9f9f"' :
                                            'id="xs-components-links-module-AppModule-7b77b679e39355238701943142ff080c1327537263c77b35ac63689e9e229638621e5cf78d6ea45ae568ceaa88e657dc953a9b3bb889edcc70b164c8101c9f9f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-6340f22000476121f675aaafbc8e7e06cd345870f71e075b732ada00ba46b42b67bd5276a08fa7d12a9286fde693f377772c86c76c3b9d982d60a836f2ec7eeb"' : 'data-bs-target="#xs-components-links-module-HomePageModule-6340f22000476121f675aaafbc8e7e06cd345870f71e075b732ada00ba46b42b67bd5276a08fa7d12a9286fde693f377772c86c76c3b9d982d60a836f2ec7eeb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-6340f22000476121f675aaafbc8e7e06cd345870f71e075b732ada00ba46b42b67bd5276a08fa7d12a9286fde693f377772c86c76c3b9d982d60a836f2ec7eeb"' :
                                            'id="xs-components-links-module-HomePageModule-6340f22000476121f675aaafbc8e7e06cd345870f71e075b732ada00ba46b42b67bd5276a08fa7d12a9286fde693f377772c86c76c3b9d982d60a836f2ec7eeb"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-5354525ceb561f2b0ab6243523e874ee391420060008b480de099d291240cff161a15831c4d31d121b4419ca3fb092edbf37ea5626abb0af648ecaa3591d470d"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-5354525ceb561f2b0ab6243523e874ee391420060008b480de099d291240cff161a15831c4d31d121b4419ca3fb092edbf37ea5626abb0af648ecaa3591d470d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-5354525ceb561f2b0ab6243523e874ee391420060008b480de099d291240cff161a15831c4d31d121b4419ca3fb092edbf37ea5626abb0af648ecaa3591d470d"' :
                                            'id="xs-components-links-module-LoginPageModule-5354525ceb561f2b0ab6243523e874ee391420060008b480de099d291240cff161a15831c4d31d121b4419ca3fb092edbf37ea5626abb0af648ecaa3591d470d"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' : 'data-bs-target="#xs-components-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' :
                                            'id="xs-components-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' : 'data-bs-target="#xs-directives-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' :
                                        'id="xs-directives-links-module-ProfilePageModule-c55328539909381a7568749506c13c6fe98cd842eac4951220177ca9960dca385e30e981728ab9ec9e845e769592f2493cc5f5c87dce285c4953d5ef0e1cc4a6"' }>
                                        <li class="link">
                                            <a href="directives/OnlyAllowedCharactersDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnlyAllowedCharactersDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link" >RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RegisterPageModule-f176cc506d1017bc2d17b6eb54a883194b70dbb47691e22a4df2ea9bba596ffa6b50959bc637ab49c693933151d574c5c30469f05042763f1cb9d6f6f171314c"' : 'data-bs-target="#xs-components-links-module-RegisterPageModule-f176cc506d1017bc2d17b6eb54a883194b70dbb47691e22a4df2ea9bba596ffa6b50959bc637ab49c693933151d574c5c30469f05042763f1cb9d6f6f171314c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-f176cc506d1017bc2d17b6eb54a883194b70dbb47691e22a4df2ea9bba596ffa6b50959bc637ab49c693933151d574c5c30469f05042763f1cb9d6f6f171314c"' :
                                            'id="xs-components-links-module-RegisterPageModule-f176cc506d1017bc2d17b6eb54a883194b70dbb47691e22a4df2ea9bba596ffa6b50959bc637ab49c693933151d574c5c30469f05042763f1cb9d6f6f171314c"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageRoutingModule.html" data-type="entity-link" >RegisterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SeasonsPageModule.html" data-type="entity-link" >SeasonsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SeasonsPageModule-c1203f85d2e9eb5a16d2affca0b83912fa0afeaa9f48d8cb9ad37395a529f71ee379e0dd2f0581176d6e5a941a6eb465ae6a53103061ed94c49053d539b676b4"' : 'data-bs-target="#xs-components-links-module-SeasonsPageModule-c1203f85d2e9eb5a16d2affca0b83912fa0afeaa9f48d8cb9ad37395a529f71ee379e0dd2f0581176d6e5a941a6eb465ae6a53103061ed94c49053d539b676b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SeasonsPageModule-c1203f85d2e9eb5a16d2affca0b83912fa0afeaa9f48d8cb9ad37395a529f71ee379e0dd2f0581176d6e5a941a6eb465ae6a53103061ed94c49053d539b676b4"' :
                                            'id="xs-components-links-module-SeasonsPageModule-c1203f85d2e9eb5a16d2affca0b83912fa0afeaa9f48d8cb9ad37395a529f71ee379e0dd2f0581176d6e5a941a6eb465ae6a53103061ed94c49053d539b676b4"' }>
                                            <li class="link">
                                                <a href="components/SeasonsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeasonsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeasonsPageRoutingModule.html" data-type="entity-link" >SeasonsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesPageModule.html" data-type="entity-link" >SeriesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SeriesPageModule-f5f372b6ad9b16439638ee0ea796fe1c656010ff9e816dcdae2752d0cb5dbec4c23731ed3a6d5e53bf49a6e09abe63b9b231d77d51a5f3ac84ad1105978f8858"' : 'data-bs-target="#xs-components-links-module-SeriesPageModule-f5f372b6ad9b16439638ee0ea796fe1c656010ff9e816dcdae2752d0cb5dbec4c23731ed3a6d5e53bf49a6e09abe63b9b231d77d51a5f3ac84ad1105978f8858"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SeriesPageModule-f5f372b6ad9b16439638ee0ea796fe1c656010ff9e816dcdae2752d0cb5dbec4c23731ed3a6d5e53bf49a6e09abe63b9b231d77d51a5f3ac84ad1105978f8858"' :
                                            'id="xs-components-links-module-SeriesPageModule-f5f372b6ad9b16439638ee0ea796fe1c656010ff9e816dcdae2752d0cb5dbec4c23731ed3a6d5e53bf49a6e09abe63b9b231d77d51a5f3ac84ad1105978f8858"' }>
                                            <li class="link">
                                                <a href="components/SeriesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesPageRoutingModule.html" data-type="entity-link" >SeriesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-2204a1ab6e0448b411f7b709610f2e68c79cbf67f10565e5da87f7ad3c6594c6e32758a0d39aa4b7d02da1fa9adfe814bd37abac125e31213bb95ce34b80a05d"' : 'data-bs-target="#xs-components-links-module-SharedModule-2204a1ab6e0448b411f7b709610f2e68c79cbf67f10565e5da87f7ad3c6594c6e32758a0d39aa4b7d02da1fa9adfe814bd37abac125e31213bb95ce34b80a05d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2204a1ab6e0448b411f7b709610f2e68c79cbf67f10565e5da87f7ad3c6594c6e32758a0d39aa4b7d02da1fa9adfe814bd37abac125e31213bb95ce34b80a05d"' :
                                            'id="xs-components-links-module-SharedModule-2204a1ab6e0448b411f7b709610f2e68c79cbf67f10565e5da87f7ad3c6594c6e32758a0d39aa4b7d02da1fa9adfe814bd37abac125e31213bb95ce34b80a05d"' }>
                                            <li class="link">
                                                <a href="components/PictureSelectableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PictureSelectableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeasonModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeasonModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeasonViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeasonViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SerieModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieSelectableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SerieSelectableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SerieViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashPageRoutingModule.html" data-type="entity-link" >SplashPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CommentsPage.html" data-type="entity-link" >CommentsPage</a>
                            </li>
                            <li class="link">
                                <a href="components/SplashPage.html" data-type="entity-link" >SplashPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseMediaService.html" data-type="entity-link" >BaseMediaService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country-1.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country-2.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/Port.html" data-type="entity-link" >Port</a>
                            </li>
                            <li class="link">
                                <a href="classes/Port-1.html" data-type="entity-link" >Port</a>
                            </li>
                            <li class="link">
                                <a href="classes/Port-2.html" data-type="entity-link" >Port</a>
                            </li>
                            <li class="link">
                                <a href="classes/StrapiMediaService.html" data-type="entity-link" >StrapiMediaService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BaseAuthenticationService.html" data-type="entity-link" >BaseAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseRepositoryFirebaseService.html" data-type="entity-link" >BaseRepositoryFirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseRepositoryHttpService.html" data-type="entity-link" >BaseRepositoryHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseRespositoryLocalStorageService.html" data-type="entity-link" >BaseRespositoryLocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CohereService.html" data-type="entity-link" >CohereService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsMappingFirebaseService.html" data-type="entity-link" >CommentsMappingFirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsRepositoryFirebaseService.html" data-type="entity-link" >CommentsRepositoryFirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsService.html" data-type="entity-link" >CommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseAuthenticationService.html" data-type="entity-link" >FirebaseAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseAuthMappingService.html" data-type="entity-link" >FirebaseAuthMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseCollectionSubscriptionService.html" data-type="entity-link" >FirebaseCollectionSubscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseMediaService.html" data-type="entity-link" >FirebaseMediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsonServerRepositoryService.html" data-type="entity-link" >JsonServerRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MySeasonsService.html" data-type="entity-link" >MySeasonsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MySeriesService.html" data-type="entity-link" >MySeriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonsLocalStorageMapping.html" data-type="entity-link" >SeasonsLocalStorageMapping</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonsMappingFirebaseService.html" data-type="entity-link" >SeasonsMappingFirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonsMappingJsonServer.html" data-type="entity-link" >SeasonsMappingJsonServer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonsMappingStrapi.html" data-type="entity-link" >SeasonsMappingStrapi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeasonsService.html" data-type="entity-link" >SeasonsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesLocalStorageMapping.html" data-type="entity-link" >SeriesLocalStorageMapping</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesMappingFirebaseService.html" data-type="entity-link" >SeriesMappingFirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesMappingJsonServer.html" data-type="entity-link" >SeriesMappingJsonServer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesMappingStrapi.html" data-type="entity-link" >SeriesMappingStrapi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesService.html" data-type="entity-link" >SeriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StrapiAuthenticationService.html" data-type="entity-link" >StrapiAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StrapiAuthMappingService.html" data-type="entity-link" >StrapiAuthMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StrapiRepositoryService.html" data-type="entity-link" >StrapiRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TasksService.html" data-type="entity-link" >TasksService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CollectionChange.html" data-type="entity-link" >CollectionChange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data-1.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data-2.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseComment.html" data-type="entity-link" >FirebaseComment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseSeason.html" data-type="entity-link" >FirebaseSeason</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseSerie.html" data-type="entity-link" >FirebaseSerie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Formats.html" data-type="entity-link" >Formats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthentication.html" data-type="entity-link" >IAuthentication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthMapping.html" data-type="entity-link" >IAuthMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseMapping.html" data-type="entity-link" >IBaseMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseRepository.html" data-type="entity-link" >IBaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseService.html" data-type="entity-link" >IBaseService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICollectionSubscription.html" data-type="entity-link" >ICollectionSubscription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommentsRepository.html" data-type="entity-link" >ICommentsRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommentsService.html" data-type="entity-link" >ICommentsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeasonsRepository.html" data-type="entity-link" >ISeasonsRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeasonsService.html" data-type="entity-link" >ISeasonsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeriesRepository.html" data-type="entity-link" >ISeriesRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeriesService.html" data-type="entity-link" >ISeriesService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStrapiAuthentication.html" data-type="entity-link" >IStrapiAuthentication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITasksRepository.html" data-type="entity-link" >ITasksRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITasksService.html" data-type="entity-link" >ITasksService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Large.html" data-type="entity-link" >Large</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MediaRaw.html" data-type="entity-link" >MediaRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Medium.html" data-type="entity-link" >Medium</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta-1.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta-2.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Model.html" data-type="entity-link" >Model</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRaw.html" data-type="entity-link" >PaginatedRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRaw-1.html" data-type="entity-link" >PaginatedRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRaw-2.html" data-type="entity-link" >PaginatedRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRaw-3.html" data-type="entity-link" >PaginatedRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProviderMetadata.html" data-type="entity-link" >ProviderMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchParams.html" data-type="entity-link" >SearchParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Season.html" data-type="entity-link" >Season</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonAttributes.html" data-type="entity-link" >SeasonAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonData.html" data-type="entity-link" >SeasonData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonRaw.html" data-type="entity-link" >SeasonRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonRaw-1.html" data-type="entity-link" >SeasonRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonRaw-2.html" data-type="entity-link" >SeasonRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeasonRaw-3.html" data-type="entity-link" >SeasonRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Serie.html" data-type="entity-link" >Serie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieAttributes.html" data-type="entity-link" >SerieAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieAttributes-1.html" data-type="entity-link" >SerieAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieData.html" data-type="entity-link" >SerieData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw-1.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw-2.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw-3.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw-4.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SerieRaw-5.html" data-type="entity-link" >SerieRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInPayload.html" data-type="entity-link" >SignInPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpPayload.html" data-type="entity-link" >SignUpPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Small.html" data-type="entity-link" >Small</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiMedia.html" data-type="entity-link" >StrapiMedia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiMediaData.html" data-type="entity-link" >StrapiMediaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiMeResponse.html" data-type="entity-link" >StrapiMeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiSignIn.html" data-type="entity-link" >StrapiSignIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiSignInResponse.html" data-type="entity-link" >StrapiSignInResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiSignUp.html" data-type="entity-link" >StrapiSignUp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiSignUpResponse.html" data-type="entity-link" >StrapiSignUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiUser.html" data-type="entity-link" >StrapiUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail.html" data-type="entity-link" >Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRaw.html" data-type="entity-link" >UserRaw</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CapitalizePipe.html" data-type="entity-link" >CapitalizePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TogglePasswordPipe.html" data-type="entity-link" >TogglePasswordPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});