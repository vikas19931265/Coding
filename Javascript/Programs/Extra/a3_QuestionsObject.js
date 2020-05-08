let damageDescribe = [
  "Earthquake/Earth Movement",
  "Fire/Smoke",
  "Hail",
  "Hurricane",
  "Lightning",
  "Theft",
  "Tornado",
  "Vandalism",
  "Water",
  "Wind",
  "Winter Weather",
  "Damage to someone else's property",
  "Injury to someone outside the household",
  "Other"
]

let theftIndicator = ["Yes", "No"]
let windlifeInd = ["Yes", "No"]
let homeEvacuateInd = ["Yes", "No"]
let waterdamageSource = ["Appliance/HVAC Failure",
  "Flood",
  "Frozen Pipe",
  "Ice Dam",
  "Plumbing Pipes/Fixtures",
  "Roof Leak",
  "Sewer Backup/Sump-Pump Overflow",
  "Wind Driven Rain",
  "Other",]

let damageSource = ["Earthquake",
  "Earth Movement",
  "Foundation Cracks",
  "Mine Collapse",
  "Animal Damage",
  "Broken or lost items(s)",
  "Explosion",
  "Mechanical Breakdown/HVAC Failure",
  "Mold or Bacteria Growth",
  "Power Outage/Surge",
  "Structural Collapse",
  "Vehicle Collision",
  "Other"]

let waterDamageTime = ["Less than 3 days?", "More than 3 days ago?"]
let alternateLivingAccomondation = ["Yes", "No"]
let entireHomeDamage = ["Yes", "No"]
let extHomeDamage = [
  "Deck/Patio",
  "Doors/Windows/Awnings",
  "Electric Box/Wiring/Service Meter",
  "Exterior Siding/Brick/Stucco",
  "Gutter/Trim",
  "Roof",
  "Other",
  "No Exterior Damage",
]

let interiorHomeDamage = [
  "Bathroom",
  "Bedroom",
  "Dining Room",
  "Kitchen",
  "Laundry Room",
  "Living Room",
  "Utility Room",
  "Other",
  "No Interior Damage"
]

let personalPropertyDamage = ["Yes", "No"]
let foodDamageInd = ["Yes", "No"]
let garagePoleShedDamageInd = ["Yes", "No"]
let garagePoleShedDamagedThings
["Doors/Windows/Awnings",
  "Electric Box/Wiring/Service Mter",
  "Exterior Siding/Brick/Stucco",
  "Gutter/Trim",
  "Roof",
  "Other"]

let otherStructureDamage = ["Carport",
  "Dock/Pier",
  "Fence",
  "Pool/Spa/Hot Tub",
  "Retaining Wall",
  "Shed/Gazebo",
  "Trees/Landscaping",
  "Other",
  "No Other Structure Damage"]

let otherPartyContactInfo = ["See F90",
  "Not available"]

buildQuestions =
{
  1: {
    "What best describes your damage?": [
      {
        "Earthquake/Earth Movement": 5,
        "Fire/Smoke": 3,
        "Hail": 8,
        "Hurricane": 8,
        "Lightning": 8,
        "Theft": 2,
        "Tornado": 8,
        "Vandalism": 8,
        "Water": 6,
        "Wind": 8,
        "Winter Weather": 6,
        "Damage to someone else's property": 18,
        "Injury to someone outside the household": 20,
        "Other": 5

      }
    ]
  },
  2: { "Was there any damage to your home as a result of the theft?": [{ "Yes": 10, "No": 17 }] },
  3: { "Is the Damage Related to a wildfire? ": [{ "Yes": 8, "No": 8 }] },
  4: { "Were you told to evacuate from your home? ": [{ "Yes": "END FNOL", "No": 9 }] },
  5: {
    "What was the source of the damage?": [{
      "Earthquake": 17,
      "Earth Movement": 17,
      "Foundation Cracks": 17,
      "Mine Collapse": 17,
      "Animal Damage": 10,
      "Broken or lost items(s)": "END_BROKENLOST",
      "Explosion": 8,
      "Mechanical Breakdown/HVAC Failure": "END_MECHANICALBREAKDOWN",
      "Mold or Bacteria Growth": 10,
      "Power Outage/Surge": 10,
      "Structural Collapse": 10,
      "Vehicle Collision": 10,
      "Other": 10,
    }]
  },
  6: {
    "What was the source of the damage?": [{
      "Appliance/HVAC Failure": 7,
      "Flood": 17,
      "Frozen Pipe": 7,
      "Ice Dam": 10,
      "Plumbing Pipes/Fixtures": 7,
      "Roof Leak": 10,
      "Sewer Backup/Sump-Pump Overflow": 10,
      "Wind Driven Rain": 10,
      "Other": 7,
    }]
  },
  7: { "Were you told to evacuate from your home?": [{ "Less than 3 days?": 8, "More than 3 days ago?": 8, }] },
  8: { "Do you need alternate living accomodations due to the extent of the damages?": [{ "Yes": 4, "No": 4 }] },
  9: { "Was there damage to the entire home? ": [{ "Yes": 4, "No": 4 }] },
  10: {
    "Do you have damage to the exterior of your home?": [{
      "Deck/Patio": 11,
      "Doors/Windows/Awnings": 11,
      "Electric Box/Wiring/Service Meter": 11,
      "Exterior Siding/Brick/Stucco": 11,
      "Gutter/Trim": 11,
      "Roof": 11,
      "Other": 11,
      "No Exterior Damage": 11,
    }]
  },
  11: {
    "Do you have any damage to the interior of your home?": [{
      "Bathroom": 12,
      "Bedroom": 12,
      "Dining Room": 12,
      "Kitchen": 12,
      "Laundry Room": 12,
      "Living Room": 12,
      "Utility Room": 12,
      "Other": 12,
      "No Interior Damage": 12,
    }]
  },
  12: { "Do you have any damage to Personal Property or Contents in the home, including food?": [{ "Yes": 13, "No": 14 }] },
  13: { "Was there damage to food items only?": [{ "Yes": 14, "No": 14 }] },
  14: { "Do you have any damage to a detached garage/pole shed/barn?": [{ "Yes": 15, "No": 16 }] },
  15: { "What was damaged on the exterior of your Detached Garage / Pole Shed / Barn?": [{ "Less than 3 days?": 8, "More than 3 days ago?": 8, }] },
  16: {
    "Were you told to evacuate from your home? ": [{
      "Doors/Windows/Awnings": 16,
      "Electric Box/Wiring/Service Meter": 16,
      "Exterior Siding/Brick/Stucco": 16,
      "Gutter/Trim": 16,
      "Roof": 16,
      "Other": 16,
    }]
  },
  17: {
    "Breifly describe what happened": [{
      "Free Form Text Box": "END FNOL"
    }]
  },
  18: {
    "Describe the damage to the other property ": [{
      "Free Form Text Box": 19
    }]
  },
  19: {
    "What is the Contact Information for the Other Party?": [{
      "See F90": 17,
      "Not available": 17,
    }]
  },
  20: {
    "Describe the Injury": [{
      "Free Form Text Box": 19
    }]
  }

}



