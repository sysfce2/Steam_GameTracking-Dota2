GameUI.CustomUIConfig().multiteam_top_scoreboard =
{
	reorder_team_scores: true,
	LeftInjectXMLFile: "file://{resources}/layout/custom_game/overthrow_scoreboard_left.xml",
	TeamOverlayXMLFile: "file://{resources}/layout/custom_game/overthrow_scoreboard_team_overlay.xml"
};

GameUI.CustomUIConfig().team_logo_xml = "file://{resources}/layout/custom_game/overthrow_team_icon.xml";
GameUI.CustomUIConfig().team_logo_large_xml = "file://{resources}/layout/custom_game/overthrow_team_icon_large.xml";

GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_TIMEOFDAY, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FIGHT_RECAP, false );

GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK, false );
GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_HEADER, false );

GameUI.SetDefaultUIEnabled( DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ENDGAME, false );

GameUI.CustomUIConfig().team_colors = {}
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_GOODGUYS] = "#3dd296;";                    	  		    
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_BADGUYS ] = "#F3C909;";                   		  		      
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_1] = "#c54da8;";                    	  		    
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_2] = "#FF6C00;";                   		  		      
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_3] = "#3455FF;";                   		  		    
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_4] = "#65d413;";                    	  		     
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_5] = "#815336;";                   		  		     
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_6] = "#1bc0d8;";                    	  		    
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_7] = "#c7e40d;";                    	  		     
GameUI.CustomUIConfig().team_colors[DOTATeam_t.DOTA_TEAM_CUSTOM_8] = "#8c2af4;";                    	  		      

GameUI.CustomUIConfig().team_icons = {}
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_GOODGUYS] = "file://{images}/custom_game/team_icons/team_icon_tiger_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_BADGUYS ] = "file://{images}/custom_game/team_icons/team_icon_monkey_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_1] = "file://{images}/custom_game/team_icons/team_icon_dragon_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_2] = "file://{images}/custom_game/team_icons/team_icon_dog_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_3] = "file://{images}/custom_game/team_icons/team_icon_rooster_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_4] = "file://{images}/custom_game/team_icons/team_icon_ram_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_5] = "file://{images}/custom_game/team_icons/team_icon_rat_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_6] = "file://{images}/custom_game/team_icons/team_icon_boar_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_7] = "file://{images}/custom_game/team_icons/team_icon_snake_01.png";
GameUI.CustomUIConfig().team_icons[DOTATeam_t.DOTA_TEAM_CUSTOM_8] = "file://{images}/custom_game/team_icons/team_icon_horse_01.png";