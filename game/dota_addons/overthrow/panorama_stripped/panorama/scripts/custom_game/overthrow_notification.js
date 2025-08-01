"use strict";
                              

function OnItemWillSpawn( msg )
{
  	                                  
	$.GetContextPanel().SetHasClass( "item_will_spawn", true );
	$.GetContextPanel().SetHasClass( "item_has_spawned", false );
	GameUI.PingMinimapAtLocation( msg.spawn_location );
	$( "#AlertMessage_Chest" ).html = true;
	$( "#AlertMessage_Delivery" ).html = true;
	$( "#AlertMessage_Chest" ).text = $.Localize( "#Chest" );
	$( "#AlertMessage_Delivery" ).text = $.Localize( "#ItemWillSpawn" );

	$.Schedule( 3, ClearItemSpawnMessage );
}

function OnItemHasSpawned( msg )
{
  	                                   
	$.GetContextPanel().SetHasClass( "item_will_spawn", false );
	$.GetContextPanel().SetHasClass( "item_has_spawned", true );
	$( "#AlertMessage_Chest" ).html = true;
	$( "#AlertMessage_Delivery" ).html = true;
	$( "#AlertMessage_Chest" ).text = $.Localize( "#Chest" );
	$( "#AlertMessage_Delivery" ).text = $.Localize( "#ItemHasSpawned" );
				
	$.Schedule( 3, ClearItemSpawnMessage );
}
		
function ClearItemSpawnMessage()
{
	$.GetContextPanel().SetHasClass( "item_will_spawn", false );
	$.GetContextPanel().SetHasClass( "item_has_spawned", false );
	$( "#AlertMessage" ).text = "";
}

                                                                
                                                                
function OnItemDrop( msg )
{
  	                                   
  	                    
	$.GetContextPanel().SetHasClass( "recent_item_drop", true );

	$( "#PickupMessage_Hero_Text" ).SetDialogVariable( "hero_id", GameUI.GetUnitNameLocalized( msg.hero_id ) );
	$( "#PickupMessage_Item_Text" ).SetDialogVariable( "item_id", $.Localize( "#DOTA_Tooltip_Ability_"+msg.dropped_item ) );

	var hero_image_name = "file://{images}/heroes/" + msg.hero_id + ".png";
	$( "#PickupMessage_Hero" ).SetImage( hero_image_name );

	var chest_image_name = "file://{images}/econ/tools/gift_lockless_luckbox.png";
	$( "#PickupMessage_Chest" ).SetImage( chest_image_name );
			
	var item_image_name = "file://{images}/items/" + msg.dropped_item.replace( "item_", "" ) + ".png"
	$( "#PickupMessage_Item" ).SetImage( item_image_name );

	$.Schedule( 5, ClearDropMessage );
}
		
function ClearDropMessage()
{
	$.GetContextPanel().SetHasClass( "recent_item_drop", false );
}

                                                                
                                                                
function AlertTimer( data )
{
  	                              
	var remainingText = "";
	
	if ( ( data.timer_minute_01 == 2 ) && ( data.timer_second_10 == 0 ) && ( data.timer_second_01 == 0 ) )
	{
		remainingText = "2 MINUTES";
		$.GetContextPanel().SetHasClass( "time_notification", true );
		$( "#AlertTimer_Text" ).text = remainingText;
		Game.EmitSound("Tutorial.TaskProgress");
	}
	if ( ( data.timer_minute_01 == 1 ) && ( data.timer_second_10 == 0 ) && ( data.timer_second_01 == 0 ) )
	{
		remainingText = "60 SECONDS";
		$.GetContextPanel().SetHasClass( "time_notification", true );
		$( "#AlertTimer_Text" ).text = remainingText;
		Game.EmitSound("Tutorial.TaskProgress");
	}
	if ( ( data.timer_second_10 == 5 ) && ( data.timer_second_01 == 5 ) )
	{
		$.GetContextPanel().SetHasClass( "time_notification", false );
	}
	if ( ( data.timer_minute_01 == 0 ) && ( data.timer_second_10 == 3 ) && ( data.timer_second_01 == 0 ) )
	{
		remainingText = "30 SECONDS";
		$.GetContextPanel().SetHasClass( "time_notification", true );
		$( "#AlertTimer_Text" ).text = remainingText;
		Game.EmitSound("Tutorial.TaskProgress");
	}
	if ( ( data.timer_minute_01 == 0 ) && ( data.timer_second_10 == 2 ) && ( data.timer_second_01 == 5 ) )
	{
		$.GetContextPanel().SetHasClass( "time_notification", false );
	}
	if ( ( data.timer_minute_01 == 0 ) && ( data.timer_second_10 == 1 ) && ( data.timer_second_01 == 0 ) )
	{
		remainingText = "10";
		$.GetContextPanel().SetHasClass( "time_notification", true );
		$.GetContextPanel().SetHasClass( "time_countdown", true );
		$( "#AlertTimer_Text" ).text = remainingText;
		Game.EmitSound("Tutorial.TaskProgress");
	}
	if ( ( data.timer_minute_01 == 0 ) && ( data.timer_second_10 == 0 ) && ( data.timer_second_01 <= 9 ) )
	{
		remainingText += data.timer_second_01;
		$( "#AlertTimer_Text" ).text = remainingText;
		Game.EmitSound("Tutorial.TaskProgress");
	}
  	                                                                                                      
  	 
  		                                                         
  		                                     
  	 
}

                                                                
                                                                
function OnOvertimeStart( data )
{
  	                                 
	var new_score_to_win = data.killcount;
	var overtimeText = "";
	overtimeText += new_score_to_win
	$.GetContextPanel().SetHasClass( "overtime_visible", true );
	$( "#Overtime_Goal" ).text = overtimeText;
}

                                                                
                                                                
function OnLeaderKilled( msg )
{
  	                                         

	$.GetContextPanel().SetHasClass( "leader_has_been_killed", true );

	$( "#KillMessage_Hero" ).SetDialogVariable( "hero_id", GameUI.GetUnitNameLocalized( msg.hero_id ) );

	$.Schedule( 5, ClearKillMessage );
}
		
function ClearKillMessage()
{
	$.GetContextPanel().SetHasClass( "leader_has_been_killed", false );
}

(function () {
	GameEvents.Subscribe( "item_will_spawn", OnItemWillSpawn );
	GameEvents.Subscribe( "item_has_spawned", OnItemHasSpawned );
	GameEvents.Subscribe( "overthrow_item_drop", OnItemDrop );
    GameEvents.Subscribe( "time_remaining", AlertTimer );
    GameEvents.Subscribe( "overtime_alert", OnOvertimeStart );
    GameEvents.Subscribe( "kill_alert", OnLeaderKilled );
})();

