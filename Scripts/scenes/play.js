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
     * This Play scene extends the objects.Scene object
     *
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Play.
         */
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the play scene
         *
         * @public
         * @method Start
         * @returns {void}
         */
        Play.prototype.Start = function () {
            // Add Play Label
            this._playLabel = new objects.Label("PLAY SCENE", "60px", "Consolas", "#000", 320, 240);
            this.addChild(this._playLabel);
            // add the start button
            this._nextButton = new objects.Button("nextButton", 320, 420, true);
            this.addChild(this._nextButton);
            // Start button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // Add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the play scene
         *
         * @public
         * @method Update
         * @returns {void}
         */
        Play.prototype.Update = function () {
            // scene updates happen here...
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the click event
         *
         * @private
         * @method _nextButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        Play.prototype._nextButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=play.js.map