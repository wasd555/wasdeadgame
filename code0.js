gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBackgroundColoredShroomObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredShroomObjects2= [];
gdjs.Untitled_32sceneCode.GDWoodenPlankFloorBoardsObjects1= [];
gdjs.Untitled_32sceneCode.GDWoodenPlankFloorBoardsObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallRedBallObjects2= [];
gdjs.Untitled_32sceneCode.GDGoldRingObjects1= [];
gdjs.Untitled_32sceneCode.GDGoldRingObjects2= [];
gdjs.Untitled_32sceneCode.GDBlock2Objects1= [];
gdjs.Untitled_32sceneCode.GDBlock2Objects2= [];
gdjs.Untitled_32sceneCode.GDOrangeStripBlock2Objects1= [];
gdjs.Untitled_32sceneCode.GDOrangeStripBlock2Objects2= [];
gdjs.Untitled_32sceneCode.GDYouWinObjects1= [];
gdjs.Untitled_32sceneCode.GDYouWinObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenCleanObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenCleanObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSmallRedBallObjects1Objects = Hashtable.newFrom({"SmallRedBall": gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGoldRingObjects1Objects = Hashtable.newFrom({"GoldRing": gdjs.Untitled_32sceneCode.GDGoldRingObjects1});
gdjs.Untitled_32sceneCode.asyncCallback8149204 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "3c91d7fe-e8e8-4f49-9741-5bb66431ffe1", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScreen", false);
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8149204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSmallRedBallObjects1Objects = Hashtable.newFrom({"SmallRedBall": gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenCleanObjects1Objects = Hashtable.newFrom({"GreenClean": gdjs.Untitled_32sceneCode.GDGreenCleanObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoldRing"), gdjs.Untitled_32sceneCode.GDGoldRingObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSmallRedBallObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGoldRingObjects1Objects, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDGoldRingObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGoldRingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGoldRingObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "WinLayer");
}{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "3c91d7fe-e8e8-4f49-9741-5bb66431ffe1", gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Score"));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenClean"), gdjs.Untitled_32sceneCode.GDGreenCleanObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSmallRedBallObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenCleanObjects1Objects, true, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1[i].getBehavior("DraggablePhysics").ReleaseDrag((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Score");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Score"))));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundColoredShroomObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredShroomObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWoodenPlankFloorBoardsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWoodenPlankFloorBoardsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallRedBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallRedBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoldRingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoldRingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlock2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlock2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeStripBlock2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDOrangeStripBlock2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDYouWinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYouWinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenCleanObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenCleanObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
