#pragma strict

var OniG : GameObject;
var debu : boolean;

private var Slot1 : float;
private var Slot2 : float;
private var Slot3 : float;
private var Slot4 : float;
private var Slot5 : float;
private var Slot6 : float;
private var Slot7 : float;
private var Slot8 : float;
private var Slot9 : float;
private var Slot10 : float;

private var Spacing : float;

private var Ran : boolean;
private var Castles : CastleGen;
private var Level : int;

Castles = GameObject.Find("CastleGenerator").GetComponent(CastleGen);

function Start () 
{
	Ran = false;
	Level = PlayerPrefs.GetInt("Level");
	PlayerPrefs.SetInt("OniUnit1Level", 1);
	
	Slot1 = 1;
	Slot2 = 1;
	Slot3 = 1;
	Slot4 = 1;
	Slot5 = 1;
	Slot6 = 1;
	Slot7 = 1;
	Slot8 = 1;
	Slot9 = 1;
	Slot10 = 1;
	Spacing = 7;
		
	if(Level > 1)
	{
		PlayerPrefs.SetInt("OniUnit1Level", 2);
	}
	if(Level > 2)
	{
		Slot2 = 2;
		PlayerPrefs.SetInt("OniUnit2Level", 1);
		PlayerPrefs.SetInt("OniUnit1Level", 3);
	}
	if(Level > 3)
	{
		PlayerPrefs.SetInt("OniUnit1Level", 4);
	}
	if(Level > 4)
	{
		Slot4 = 2;
		PlayerPrefs.SetInt("OniUnit2Level", 2);
		PlayerPrefs.SetInt("OniUnit1Level", 5);
	}
	if(Level > 5)
	{
		PlayerPrefs.SetInt("OniUnit1Level", 6);
	}
	if(Level > 6)
	{
		Slot6 = 2;
		PlayerPrefs.SetInt("OniUnit2Level", 3);
		PlayerPrefs.SetInt("OniUnit1Level", 7);
	}
	if(Level > 7)
	{
		PlayerPrefs.SetInt("OniUnit1Level", 8);
	}
	if(Level > 8)
	{
		Slot8 = 2;
		PlayerPrefs.SetInt("OniUnit2Level", 4);
		PlayerPrefs.SetInt("OniUnit1Level", 9);
	}
	if(Level > 9)
	{
		Slot10 = 2;
		
		PlayerPrefs.SetInt("OniUnit1Level", 10);
	}
	if(Level > 10)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 5);
		PlayerPrefs.SetInt("OniUnit1Level", 11);
	}
	if(Level > 11)
	{
		Slot9 = 2;
		PlayerPrefs.SetInt("OniUnit1Level", 12);
	}
	if(Level > 12)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 6);
		PlayerPrefs.SetInt("OniUnit1Level", 13);
	}
	if(Level > 13)
	{
		Slot7 = 2;
		PlayerPrefs.SetInt("OniUnit1Level", 14);
	}
	if(Level > 14)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 7);
		PlayerPrefs.SetInt("OniUnit1Level", 15);
	}
	if(Level > 15)
	{
		Slot5 = 2;
		PlayerPrefs.SetInt("OniUnit1Level", 16);
	}
	if(Level > 16)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 8);
		PlayerPrefs.SetInt("OniUnit1Level", 17);
	}
	if(Level > 17)
	{
		Slot3 = 2;
		PlayerPrefs.SetInt("OniUnit1Level", 18);
	}
	if(Level > 18)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 9);
		PlayerPrefs.SetInt("OniUnit1Level", 19);
	}
	if(Level > 19)
	{
		Slot1 = 2;
		PlayerPrefs.SetInt("OniUnit2Level", 10);
	}
	if(Level > 20)
	{
		Slot2 = 3;
		PlayerPrefs.SetInt("OniUnit2Level", 11);
		PlayerPrefs.SetInt("OniUnit3Level", 1);
	}
	if(Level > 21)
	{
		
	}
	if(Level > 22)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 12);
		PlayerPrefs.SetInt("OniUnit3Level", 2);
	}
	if(Level > 23)
	{
		Slot4 = 3;
	}
	if(Level > 24)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 13);
		PlayerPrefs.SetInt("OniUnit3Level", 3);
	}	
	if(Level > 25)
	{
		Slot6 = 3;
	}
	if(Level > 26)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 14);
		PlayerPrefs.SetInt("OniUnit3Level", 4);
	}
	if(Level > 27)
	{
		Slot8 = 3;
	}
	if(Level > 28)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 15);
		PlayerPrefs.SetInt("OniUnit3Level", 5);
	}
	if(Level > 29)
	{
		Slot10 = 3;
	}
	if(Level > 30)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 16);
		PlayerPrefs.SetInt("OniUnit3Level", 6);
	}
	if(Level > 31)
	{
		Slot9 = 3;
	}
	if(Level > 32)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 17);
		PlayerPrefs.SetInt("OniUnit3Level", 7);
	}
	if(Level > 33)
	{
		Slot7 = 3;
	}
	if(Level > 34)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 18);
		PlayerPrefs.SetInt("OniUnit3Level", 8);
	}
	if(Level > 35)
	{
		Slot5 = 3;
	}
	if(Level > 36)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 19);
		PlayerPrefs.SetInt("OniUnit3Level", 9);
	}
	if(Level > 37)
	{
		Slot3 = 3;
	}
	if(Level > 38)
	{
		PlayerPrefs.SetInt("OniUnit2Level", 20);
		PlayerPrefs.SetInt("OniUnit3Level", 10);
	}
	if(Level > 39)
	{
		Slot1 = 3;
	}
	if(Level > 40)
	{
		Slot2 = 4;
		PlayerPrefs.SetInt("OniUnit3Level", 11);
		PlayerPrefs.SetInt("OniUnit4Level", 1);
	}
	if(Level > 41)
	{
		
	}
	if(Level > 42)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 12);
		PlayerPrefs.SetInt("OniUnit4Level", 2);
	}
	if(Level > 43)
	{
		Slot4 = 4;
	}
	if(Level > 44)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 13);
		PlayerPrefs.SetInt("OniUnit4Level", 3);
	}
	if(Level > 45)
	{
		Slot6 = 4;
	}
	if(Level > 46)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 14);
		PlayerPrefs.SetInt("OniUnit4Level", 4);
	}
	if(Level > 47)
	{
		Slot8 = 4;
	}
	if(Level > 48)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 15);
		PlayerPrefs.SetInt("OniUnit4Level", 5);
	}
	if(Level > 49)
	{
		Slot10 = 4;
	}
	if(Level > 50)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 16);
		PlayerPrefs.SetInt("OniUnit4Level", 6);
	}
	if(Level > 51)
	{
		Slot9 = 4;
	}
	if(Level > 52)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 17);
		PlayerPrefs.SetInt("OniUnit4Level", 7);
	}
	if(Level > 53)
	{
		Slot7 = 4;
	}
	if(Level > 54)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 18);
		PlayerPrefs.SetInt("OniUnit4Level", 8);
	}
	if(Level > 55)
	{
		Slot5 = 4;
	}
	if(Level > 56)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 19);
		PlayerPrefs.SetInt("OniUnit4Level", 9);
	}
	if(Level > 57)
	{
		Slot3 = 4;
	}
	if(Level > 58)
	{
		PlayerPrefs.SetInt("OniUnit3Level", 20);
		PlayerPrefs.SetInt("OniUnit4Level", 10);
	}
	if(Level > 59)
	{
		Slot1 = 4;
	}
	if(Level > 60)
	{
		Slot2 = 5;
		PlayerPrefs.SetInt("OniUnit4Level", 11);
		PlayerPrefs.SetInt("OniUnit5Level", 1);
	}
	if(Level > 61)
	{
		
	}
	if(Level > 62)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 12);
		PlayerPrefs.SetInt("OniUnit5Level", 2);
	}
	if(Level > 63)
	{
		Slot4 = 5;
	}
	if(Level > 64)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 13);
		PlayerPrefs.SetInt("OniUnit5Level", 3);
	}
	if(Level > 65)
	{
		Slot6 = 5;
	}
	if(Level > 66)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 14);
		PlayerPrefs.SetInt("OniUnit5Level", 4);
	}
	if(Level > 67)
	{
		Slot7 = 5;
	}
	if(Level > 68)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 15);
		PlayerPrefs.SetInt("OniUnit5Level", 5);
	}
	if(Level > 69)
	{
		Slot10 = 5;
	}
	if(Level > 70)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 16);
		PlayerPrefs.SetInt("OniUnit5Level", 6);
	}
	if(Level > 71)
	{
		Slot9 = 5;
	}
	if(Level > 72)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 17);
		PlayerPrefs.SetInt("OniUnit5Level", 7);
	}
	if(Level > 73)
	{
		Slot7 = 5;
	}
	if(Level > 74)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 18);
		PlayerPrefs.SetInt("OniUnit5Level", 8);
	}
	if(Level > 75)
	{
		Slot5 = 5;
	}
	if(Level > 76)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 19);
		PlayerPrefs.SetInt("OniUnit5Level", 9);
	}
	if(Level > 77)
	{
		Slot3 = 5;
	}
	if(Level > 78)
	{
		PlayerPrefs.SetInt("OniUnit4Level", 20);
		PlayerPrefs.SetInt("OniUnit5Level", 10);
	}
	if(Level > 79)
	{
		Slot1 = 5;
	}
	if(Level > 80)
	{
		Slot2 = 6;
		PlayerPrefs.SetInt("OniUnit5Level", 11);
		PlayerPrefs.SetInt("OniUnit6Level", 1);
	}
	if(Level > 81)
	{
		
	}
	if(Level > 82)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 12);
		PlayerPrefs.SetInt("OniUnit6Level", 2);
	}
	if(Level > 83)
	{
		Slot4 = 6;
	}
	if(Level > 84)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 13);
		PlayerPrefs.SetInt("OniUnit6Level", 3);
	}
	if(Level > 85)
	{
		Slot6 = 6;
	}
	if(Level > 86)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 14);
		PlayerPrefs.SetInt("OniUnit6Level", 4);
	}
	if(Level > 87)
	{
		Slot8 = 6;
	}
	if(Level > 88)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 15);
		PlayerPrefs.SetInt("OniUnit6Level", 5);
	}
	if(Level > 89)
	{
		Slot10 = 6;
	}
	if(Level > 90)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 16);
		PlayerPrefs.SetInt("OniUnit6Level", 6);
	}
	if(Level > 91)
	{
		Slot2 = 6;
	}
	if(Level > 92)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 17);
		PlayerPrefs.SetInt("OniUnit6Level", 7);
	}
	if(Level > 93)
	{
		Slot7 = 6;
	}
	if(Level > 94)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 18);
		PlayerPrefs.SetInt("OniUnit6Level", 8);
	}
	if(Level > 95)
	{
		Slot5 = 6;
	}
	if(Level > 96)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 19);
		PlayerPrefs.SetInt("OniUnit6Level", 9);
	}
	if(Level > 97)
	{
		Slot3 = 6;
	}
	if(Level > 98)
	{
		PlayerPrefs.SetInt("OniUnit5Level", 20);
		PlayerPrefs.SetInt("OniUnit6Level", 10);
	}
	if(Level > 99)
	{
		Slot1 = 6;
	}
	if(Level > 100)
	{
		Slot2 = 7;
		PlayerPrefs.SetInt("OniUnit6Level", 11);
		PlayerPrefs.SetInt("OniUnit7Level", 1);
	}
	if(Level > 101)
	{
		
	}
	if(Level > 102)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 12);
		PlayerPrefs.SetInt("OniUnit7Level", 2);
	}
	if(Level > 103)
	{
		Slot4 = 7;
	}
	if(Level > 104)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 13);
		PlayerPrefs.SetInt("OniUnit7Level", 3);	
	}
	if(Level > 105)
	{
		Slot6 = 7;
	}
	if(Level > 106)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 14);
		PlayerPrefs.SetInt("OniUnit7Level", 4);
	}
	if(Level > 107)
	{
		Slot8 = 7;
	}
	if(Level > 108)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 15);
		PlayerPrefs.SetInt("OniUnit7Level", 5);
	}
	if(Level > 109)
	{
		Slot10 = 7;
	}
	if(Level > 110)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 16);
		PlayerPrefs.SetInt("OniUnit7Level", 6);		
	}
	if(Level > 111)
	{
		Slot9 = 7;
	}
	if(Level > 112)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 17);
		PlayerPrefs.SetInt("OniUnit7Level", 7);
	}
	if(Level > 113)
	{
		Slot7 = 7;
	}
	if(Level > 114)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 18);
		PlayerPrefs.SetInt("OniUnit7Level", 8);
	}
	if(Level > 115)
	{
		Slot5 = 7;
	}
	if(Level > 116)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 19);
		PlayerPrefs.SetInt("OniUnit7Level", 9);
	}
	if(Level > 117)
	{
		Slot3 = 7;
	}
	if(Level > 118)
	{
		PlayerPrefs.SetInt("OniUnit6Level", 20);
		PlayerPrefs.SetInt("OniUnit7Level", 10);
	}
	if(Level > 119)
	{
		Slot1 = 7;
	}
	if(Level > 120)
	{
		Slot2 = 8;
		PlayerPrefs.SetInt("OniUnit7Level", 11);
		PlayerPrefs.SetInt("OniUnit8Level", 1);
	}
	if(Level > 121)
	{
		
	}
	if(Level > 122)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 12);
		PlayerPrefs.SetInt("OniUnit8Level", 2);
	}
	if(Level > 123)
	{
		Slot4 = 8;
	}
	if(Level > 124)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 13);
		PlayerPrefs.SetInt("OniUnit8Level", 3);
	}
	if(Level > 125)
	{
		Slot6 = 8;
	}
	if(Level > 126)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 14);
		PlayerPrefs.SetInt("OniUnit8Level", 4);
	}
	if(Level > 127)
	{
		Slot8 = 8;
	}
	if(Level > 128)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 15);
		PlayerPrefs.SetInt("OniUnit8Level", 5);
	}
	if(Level > 129)
	{
		Slot10 = 8;
	}
	if(Level > 130)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 16);
		PlayerPrefs.SetInt("OniUnit8Level", 6);
	}
	if(Level > 131)
	{
		Slot9 = 8;
	}
	if(Level > 132)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 17);
		PlayerPrefs.SetInt("OniUnit8Level", 7);
	}
	if(Level > 133)
	{
		Slot7 = 8;
	}
	if(Level > 134)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 18);
		PlayerPrefs.SetInt("OniUnit8Level", 8);
	}
	if(Level > 135)
	{
		Slot5 = 8;
	}
	if(Level > 136)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 19);
		PlayerPrefs.SetInt("OniUnit8Level", 9);
	}
	if(Level > 137)
	{
		Slot3 = 8;
	}
	if(Level > 138)
	{
		PlayerPrefs.SetInt("OniUnit7Level", 20);
		PlayerPrefs.SetInt("OniUnit8Level", 10);
	}
	if(Level > 139)
	{
		Slot1 = 8;
	}
	if(Level > 140)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 11);
	}
	if(Level > 141)
	{
		
	}
	if(Level > 142)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 12);
	}
	if(Level > 143)
	{
		
	}
	if(Level > 144)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 13);
	}
	if(Level > 145)
	{
		
	}
	if(Level > 146)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 14);
	}
	if(Level > 147)
	{
		
	}
	if(Level > 148)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 15);
	}
	if(Level > 149)
	{
		
	}
	if(Level > 150)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 16);
	}
	if(Level > 151)
	{
		
	}
	if(Level > 152)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 17);
	}
	if(Level > 153)
	{
		
	}
	if(Level > 154)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 18);
	}
	if(Level > 155)
	{
		
	}
	if(Level > 156)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 19);
	}
	if(Level > 157)
	{
		
	}
	if(Level > 158)
	{
		PlayerPrefs.SetInt("OniUnit8Level", 20);
	}
	if(Level > 159)
	{
		PlayerPrefs.SetInt("OniUnit8Level", (Level - 20));
	}
}

function FixedUpdate () 
{
	if(!Variables.Intro && !Ran && !Variables.Tutorial)
	{
		StartCoroutine("Run");
		Ran = true;
	}
}

function Run()
{
	while(Castles.BlueHealth >= 0 && Castles.PinkHealth >= 0 && !debu)
	{
//		Debug.Log("Ran");
		yield WaitForSeconds(Spacing);
		Reduce();
		if(Castles.PinkHealth > 0)
		{
			var Temp1 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp1.name = "Oni" + Slot1.ToString(); 
			Temp1.GetComponent(Oni).Num = Slot1;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp2 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp2.name = "Oni" + Slot2.ToString(); 
			Temp2.GetComponent(Oni).Num = Slot2;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp3 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp3.name = "Oni" + Slot3.ToString(); 
			Temp3.GetComponent(Oni).Num = Slot3;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp4 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp4.name = "Oni" + Slot4.ToString(); 
			Temp4.GetComponent(Oni).Num = Slot4;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp5 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp5.name = "Oni" + Slot5.ToString(); 
			Temp5.GetComponent(Oni).Num = Slot5;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp6 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp6.name = "Oni" + Slot6.ToString(); 
			Temp6.GetComponent(Oni).Num = Slot6;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp7 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp7.name = "Oni" + Slot7.ToString(); 
			Temp7.GetComponent(Oni).Num = Slot7;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp8 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp8.name = "Oni" + Slot8.ToString(); 
			Temp8.GetComponent(Oni).Num = Slot8;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp9 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp9.name = "Oni" + Slot9.ToString(); 
			Temp9.GetComponent(Oni).Num = Slot9;
			yield WaitForSeconds(Spacing);
			Reduce();
		}
		if(Castles.PinkHealth > 0)
		{
			var Temp10 = new Instantiate(OniG,Vector3(48,2,-09),Quaternion.Euler(90,0,0));
			Temp10.name = "Oni" + Slot10.ToString(); 
			Temp10.GetComponent(Oni).Num = Slot10;
		}
	}
}

function Reduce()
{
	if(Spacing > 2)
	{
		Spacing = Spacing - 0.1;
	}
}