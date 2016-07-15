var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * This is the generic scenes namespace
 *
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This Menu scene extends the objects.Scene object
     *
     * @export
     * @class Menu
     * @extends {objects.Scene}
     */
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Menu.
         */
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the menu scene
         *
         * @public
         * @method Start
         * @returns {void}
         */
        Menu.prototype.Start = function () {
            // Add Menu Label
            this._menuLabel = new objects.Label("MENU SCENE", "60px", "Consolas", "#000", 320, 240);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // Add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the menu scene
         *
         * @public
         * @method Update
         * @returns {void}
         */
        Menu.prototype.Update = function () {
            // scene updates happen here...
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the click event
         *
         * @private
         * @method _startOverButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=menu.js.map