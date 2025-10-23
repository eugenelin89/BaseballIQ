const QUESTION_BANK = [
  {
    id: 1,
    difficulty: "easy",
    prompt: "True or False: If a runner doesn’t slide on a force play, they are automatically out.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 2,
    difficulty: "easy",
    prompt: "Prior to the pitch, a balk is called by the umpire, but the pitcher still delivers the pitch. What should the batter do?",
    options: [
      "Swing if it’s a good pitch",
      "Swing no matter what",
      "Take the pitch",
      "Step out of the box",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    difficulty: "easy",
    prompt: "A bunt comes to rest on top of home plate. Is it fair or foul?",
    options: ["Fair", "Foul", "Dead ball", "Umpire discretion"],
    correctIndex: 0,
  },
  {
    id: 4,
    difficulty: "easy",
    prompt: "If a fly ball hits a runner standing on a base before a fielder catches it, what is the call?",
    options: ["Runner is out", "Batter is out", "Both out", "Play continues"],
    correctIndex: 0,
  },
  {
    id: 5,
    difficulty: "easy",
    prompt: "True or False: The batter’s hands are considered part of the bat.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 6,
    difficulty: "easy",
    prompt: "If a catcher drops strike three with two outs and first base open, can the batter run?",
    options: ["Yes", "No", "Only with two strikes", "Only if catcher appeals"],
    correctIndex: 0,
  },
  {
    id: 7,
    difficulty: "easy",
    prompt: "True or False: The infield fly rule can be called with runners on first and second and one out.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 8,
    difficulty: "easy",
    prompt: "With two strikes, a batter attempts a bunt and fouls it off. What is the ruling?",
    options: [
      "Batter is out",
      "Foul ball, continue at-bat",
      "Strike only if the defense catches it",
      "Umpire decides based on intent",
    ],
    correctIndex: 0,
  },
  {
    id: 9,
    difficulty: "easy",
    prompt: "A batter swings as the pitch hits them on the hands. What happens?",
    options: [
      "Batter is awarded first base",
      "Ball is dead and counts as a ball",
      "Strike is called because of the swing",
      "Play continues as a live ball",
    ],
    correctIndex: 2,
  },
  {
    id: 10,
    difficulty: "easy",
    prompt: "A ground ball hits third base and caroms foul before reaching the outfield. How is it ruled?",
    options: [
      "Fair ball, play continues",
      "Foul ball, play stops",
      "Dead ball, runners return",
      "Umpire discretion",
    ],
    correctIndex: 0,
  },
  {
    id: 11,
    difficulty: "easy",
    prompt: "Can a run score on a sacrifice fly that is caught in foul territory?",
    options: [
      "Yes, the runner may tag and score",
      "No, a foul fly never scores a run",
      "Only if the ball travels beyond first base",
      "Only if the defense commits an error",
    ],
    correctIndex: 0,
  },
  {
    id: 12,
    difficulty: "easy",
    prompt: "The catcher drops strike three with a runner on first and fewer than two outs. What is the ruling?",
    options: [
      "The batter can attempt to run",
      "The batter is automatically out",
      "The batter must stay unless the defense appeals",
      "The batter chooses to run or stay",
    ],
    correctIndex: 1,
  },
  {
    id: 13,
    difficulty: "easy",
    prompt: "A pitcher starts his motion toward the plate but stops without stepping off. What is the call?",
    options: ["Legal move", "Balk on the pitcher", "Ball on the batter", "Dead ball, no call"],
    correctIndex: 1,
  },
  {
    id: 14,
    difficulty: "easy",
    prompt: "True or False: A ball that hits the foul pole above the fence is a home run.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 15,
    difficulty: "easy",
    prompt: "Who has the final say on whether a batter offered at a checked swing?",
    options: [
      "First- or third-base umpire",
      "Home plate umpire",
      "Defensive manager",
      "Batter’s manager",
    ],
    correctIndex: 1,
  },
  {
    id: 16,
    difficulty: "easy",
    prompt: "With a runner on third and one out, what’s the batter’s best goal?",
    options: [
      "Ground ball to right side",
      "Fly ball deep to outfield",
      "Hard line drive to third base",
      "Draw a walk",
    ],
    correctIndex: 1,
  },
  {
    id: 17,
    difficulty: "easy",
    prompt: "You’re tied in the 8th inning with runners on first and second and nobody out. What’s the smart play?",
    options: [
      "Swing away",
      "Bunt to advance runners",
      "Steal both bases",
      "Wait for a walk",
    ],
    correctIndex: 1,
  },
  {
    id: 18,
    difficulty: "easy",
    prompt: "The defense is up by two with a runner on third and one out. Where should the infield play?",
    options: ["Infield in", "Halfway", "Back", "Guard lines"],
    correctIndex: 2,
  },
  {
    id: 19,
    difficulty: "easy",
    prompt: "You’re up by one in the last inning with a slow runner on third — where should the infield play?",
    options: ["In", "Halfway", "Back", "Corners in"],
    correctIndex: 0,
  },
  {
    id: 20,
    difficulty: "easy",
    prompt: "True or False: On a 3–2 count with two outs and a runner on first, the runner should run on the pitch.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 21,
    difficulty: "easy",
    prompt: "When is it okay to intentionally walk a hitter?",
    options: [
      "Always with first base open",
      "To set up a double play",
      "Only if the pitcher is behind in the count",
      "To load the bases",
    ],
    correctIndex: 1,
  },
  {
    id: 22,
    difficulty: "easy",
    prompt: "What is the primary goal of a hit-and-run play?",
    options: [
      "Put the ball in play to protect the stealing runner",
      "Steal the base regardless of contact",
      "Surprise the defense with a bunt",
      "Force the pitcher to throw a fastball",
    ],
    correctIndex: 0,
  },
  {
    id: 23,
    difficulty: "easy",
    prompt: "On a safety squeeze, when should the runner on third break for home?",
    options: [
      "As the pitcher begins delivery",
      "Only after seeing the bunt put on the ground",
      "After the third baseman fields the ball",
      "Never; he holds at third",
    ],
    correctIndex: 1,
  },
  {
    id: 24,
    difficulty: "easy",
    prompt: "Ahead in the count 3–1, what is a typical hitting approach?",
    options: [
      "Look for a driveable pitch in the zone",
      "Take the pitch automatically",
      "Shorten the swing drastically",
      "Square to bunt",
    ],
    correctIndex: 0,
  },
  {
    id: 25,
    difficulty: "easy",
    prompt: "Protecting a one-run lead in the late innings, how should the outfield generally position themselves?",
    options: [
      "Play deeper to prevent extra-base hits",
      "Play shallow to stop singles",
      "Guard the lines only",
      "Shade toward center field exclusively",
    ],
    correctIndex: 0,
  },
  {
    id: 26,
    difficulty: "easy",
    prompt: "With two outs and runners on first and second, a fly ball is hit to right field. What should the runners do?",
    options: [
      "Hold until the catch is made",
      "Tag up and wait",
      "Run on contact because there are two outs",
      "Advance halfway and decide later",
    ],
    correctIndex: 2,
  },
  {
    id: 27,
    difficulty: "easy",
    prompt: "Down by several runs early, what should the offense focus on?",
    options: [
      "Swinging for home runs only",
      "Drawing quality at-bats and getting on base",
      "Bunting every hitter",
      "Stealing immediately",
    ],
    correctIndex: 1,
  },
  {
    id: 28,
    difficulty: "easy",
    prompt: "With the infield playing in and a runner on third, one out, the runner should:",
    options: [
      "Break for home on any ground ball",
      "Freeze until the ball gets through the infield",
      "Return to third only if the ball is fielded cleanly",
      "Wait for the base coach to shout before moving",
    ],
    correctIndex: 1,
  },
  {
    id: 29,
    difficulty: "easy",
    prompt: "With one out and a runner on first, a fly ball is hit to medium-depth center. What should the runner do?",
    options: [
      "Tag immediately and run",
      "Go halfway and read the play",
      "Run full speed without looking",
      "Stay on first no matter what",
    ],
    correctIndex: 1,
  },
  {
    id: 30,
    difficulty: "easy",
    prompt: "With two outs and a runner on second, a clean single is hit to the outfield. The runner should:",
    options: [
      "Stop at third",
      "Wait to see if the ball is bobbled",
      "Tag the base and hold until the coach waves him",
      "Run on contact and try to score",
    ],
    correctIndex: 3,
  },
  {
    id: 31,
    difficulty: "easy",
    prompt: "On a ground ball to second base with a runner on first, the runner’s job is to:",
    options: [
      "Stop and force a rundown",
      "Slide hard and legally into second to disrupt the double play",
      "Peel off toward the outfield grass",
      "Return to first immediately",
    ],
    correctIndex: 1,
  },
  {
    id: 32,
    difficulty: "easy",
    prompt: "A base hit to right field is fielded in front of the runner on first. What is the smart play for the runner?",
    options: [
      "Attempt to reach third",
      "Hold at second",
      "Stop halfway until the coach decides",
      "Return to first base",
    ],
    correctIndex: 1,
  },
  {
    id: 33,
    difficulty: "easy",
    prompt: "With two outs, runner on third, and a passed ball, the runner should:",
    options: [
      "Stay on third to avoid a tag",
      "Break for home immediately",
      "Wait to see if the catcher recovers cleanly",
      "Ask the coach for instruction before moving",
    ],
    correctIndex: 1,
  },
  {
    id: 34,
    difficulty: "easy",
    prompt: "Which coach is primarily responsible for guiding runners approaching third base?",
    options: ["First-base coach", "Third-base coach", "Bench coach", "Pitching coach"],
    correctIndex: 1,
  },
  {
    id: 35,
    difficulty: "easy",
    prompt: "To maximize a stolen base attempt, a runner should focus on:",
    options: [
      "Watching the catcher’s glove",
      "Reading the pitcher’s first move toward the plate",
      "Listening for crowd noise",
      "Waiting until the batter swings",
    ],
    correctIndex: 1,
  },
  {
    id: 36,
    difficulty: "easy",
    prompt: "True or False: Runners must retouch their base after a caught line drive even if they were forced to advance.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 37,
    difficulty: "easy",
    prompt: "On a double to the gap with a speedy runner starting at first, the goal is to:",
    options: [
      "Reach third and stop",
      "Score from first if possible",
      "Stop at second to avoid risk",
      "Tag each base before advancing",
    ],
    correctIndex: 1,
  },
  {
    id: 38,
    difficulty: "easy",
    prompt: "When tagging from third base, the runner should:",
    options: [
      "Leave as soon as the fielder raises his glove",
      "Leave when the ball is caught and the fielder starts his throw",
      "Leave when the coach shouts “go”",
      "Leave after the throw reaches home",
    ],
    correctIndex: 1,
  },
  {
    id: 39,
    difficulty: "easy",
    prompt: "With runners on first and second, a pop-up in the infield is hit. What should the runners do?",
    options: [
      "Run immediately",
      "Stay on their bases to avoid an infield fly double play",
      "Tag up and advance",
      "Creep halfway toward the next base",
    ],
    correctIndex: 1,
  },
  {
    id: 40,
    difficulty: "easy",
    prompt: "On a slow roller to the pitcher with a runner on first, the runner should:",
    options: [
      "Retreat to first",
      "Stop midway to cause interference",
      "Run hard through second because it is a force play",
      "Slide headfirst into first base",
    ],
    correctIndex: 2,
  },
  {
    id: 41,
    difficulty: "medium",
    prompt: "A right-handed pitcher opens his front shoulder too early. What will likely happen?",
    options: [
      "Miss high and arm-side",
      "Miss low and glove-side",
      "Throw more strikes",
      "Increase velocity",
    ],
    correctIndex: 0,
  },
  {
    id: 42,
    difficulty: "medium",
    prompt: "What mechanical cue helps keep a consistent release point?",
    options: ["Stay tall", "Finish out front", "Pull head early", "Shorten stride"],
    correctIndex: 1,
  },
  {
    id: 43,
    difficulty: "medium",
    prompt: "True or False: Using the lower half helps generate velocity and stability.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 44,
    difficulty: "medium",
    prompt: "What’s the main benefit of a long stride?",
    options: [
      "Adds deception and extension",
      "Slows delivery for control",
      "Improves arm path",
      "Reduces fatigue",
    ],
    correctIndex: 0,
  },
  {
    id: 45,
    difficulty: "medium",
    prompt: "What’s the purpose of a pre-pitch routine?",
    options: [
      "Relax muscles",
      "Build consistency and focus",
      "Distract the batter",
      "Speed up tempo",
    ],
    correctIndex: 1,
  },
  {
    id: 46,
    difficulty: "medium",
    prompt: "Which pitch relies most on pronation for spin direction?",
    options: ["Curveball", "Changeup", "Slider", "Cutter"],
    correctIndex: 1,
  },
  {
    id: 47,
    difficulty: "medium",
    prompt: "What is the primary benefit of using a slide step with runners on base?",
    options: [
      "Increase fastball velocity",
      "Reduce the runner’s jump by speeding time to the plate",
      "Improve curveball break",
      "Make it easier to throw high strikes",
    ],
    correctIndex: 1,
  },
  {
    id: 48,
    difficulty: "medium",
    prompt: "A pitcher consistently bounces curveballs in front of the plate. Which adjustment helps most?",
    options: [
      "Release earlier and stay on top of the ball",
      "Shorten the stride dramatically",
      "Open the front shoulder sooner",
      "Reduce overall arm speed",
    ],
    correctIndex: 0,
  },
  {
    id: 49,
    difficulty: "medium",
    prompt: "Which fastball grip is designed to create arm-side run and sink?",
    options: [
      "Four-seam fastball",
      "Two-seam/sinker grip",
      "Split-finger grip",
      "Cutter grip",
    ],
    correctIndex: 1,
  },
  {
    id: 50,
    difficulty: "medium",
    prompt: "Why should a pitcher throw a changeup with the same arm speed as their fastball?",
    options: [
      "To reduce spin rate",
      "To maintain deception and disrupt timing",
      "To add velocity",
      "To raise the release point",
    ],
    correctIndex: 1,
  },
  {
    id: 51,
    difficulty: "medium",
    prompt: "Firming up the front leg at release helps a pitcher by:",
    options: [
      "Slowing momentum to the plate",
      "Transferring energy up the chain and improving command",
      "Lowering the release height drastically",
      "Hiding the ball longer from the hitter",
    ],
    correctIndex: 1,
  },
  {
    id: 52,
    difficulty: "medium",
    prompt: "During PFP (pitchers’ fielding practice), what is the top priority?",
    options: [
      "Practicing long toss",
      "Covering first base and fielding bunts cleanly",
      "Working on pickoff moves only",
      "Throwing bullpens at full speed",
    ],
    correctIndex: 1,
  },
  {
    id: 53,
    difficulty: "medium",
    prompt: "Staying over the backside longer in the delivery primarily helps with:",
    options: [
      "Increasing arm slot changes",
      "Maintaining direction toward the plate",
      "Hiding the ball from hitters",
      "Throwing more curveballs",
    ],
    correctIndex: 1,
  },
  {
    id: 54,
    difficulty: "medium",
    prompt: "Keeping the fingers on top of the baseball through release encourages:",
    options: [
      "Sideways spin",
      "A downhill plane and improved command",
      "Slower velocity",
      "More arm-side run on every pitch",
    ],
    correctIndex: 1,
  },
  {
    id: 55,
    difficulty: "medium",
    prompt: "Between-start bullpen sessions are mainly used to:",
    options: [
      "Build maximum velocity",
      "Reinforce mechanics and pitch feel",
      "Rest the arm completely",
      "Work only on pickoffs",
    ],
    correctIndex: 1,
  },
  {
    id: 56,
    difficulty: "medium",
    prompt: "When should a hitter shorten their stride?",
    options: [
      "With two strikes",
      "With a full count",
      "When facing a slow pitcher",
      "Always",
    ],
    correctIndex: 0,
  },
  {
    id: 57,
    difficulty: "medium",
    prompt: "True or False: A hitter should always take the first pitch.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 58,
    difficulty: "medium",
    prompt: "“Staying inside the ball” means:",
    options: [
      "Hands stay close to the body through contact",
      "Swinging around the ball",
      "Hitting only to the opposite field",
      "Opening hips early",
    ],
    correctIndex: 0,
  },
  {
    id: 59,
    difficulty: "medium",
    prompt: "Runner on first — ball hit sharply to right fielder. What should the runner do?",
    options: [
      "Go halfway and read the play",
      "Return to base immediately",
      "Tag and advance",
      "Run full speed to second",
    ],
    correctIndex: 0,
  },
  {
    id: 60,
    difficulty: "medium",
    prompt: "What’s the best approach in a 2–0 count?",
    options: [
      "Look fastball and drive it",
      "Take no matter what",
      "Swing for power only",
      "Shorten swing",
    ],
    correctIndex: 0,
  },
  {
    id: 61,
    difficulty: "medium",
    prompt: "What is the goal of a sacrifice bunt?",
    options: [
      "Move runner into scoring position",
      "Get a base hit",
      "Force a defensive error",
      "Advance the batter",
    ],
    correctIndex: 0,
  },
  {
    id: 62,
    difficulty: "medium",
    prompt: "A tee drill focusing on hitting to the opposite field trains a hitter to:",
    options: [
      "Collapse the back side",
      "Keep the barrel inside and stay through the ball",
      "Roll the wrists early",
      "Swing slower than normal",
    ],
    correctIndex: 1,
  },
  {
    id: 63,
    difficulty: "medium",
    prompt: "Against a hard-throwing pitcher, a hitter should begin their load:",
    options: [
      "Later than normal",
      "At the same time regardless of velocity",
      "Slightly earlier to be on time",
      "Only after the ball is released",
    ],
    correctIndex: 2,
  },
  {
    id: 64,
    difficulty: "medium",
    prompt: "With two strikes, a common adjustment is to:",
    options: [
      "Widen the stance and shorten the swing",
      "Increase the leg kick",
      "Guess pitch type and sell out",
      "Step out of the box",
    ],
    correctIndex: 0,
  },
  {
    id: 65,
    difficulty: "medium",
    prompt: "Executing a drag bunt requires the batter to:",
    options: [
      "Square early and stay stationary",
      "Drop the bat and run after bunting through the ball",
      "Begin running while deadening the ball toward the first-base line",
      "Swing hard and hope for contact",
    ],
    correctIndex: 2,
  },
  {
    id: 66,
    difficulty: "medium",
    prompt: "Reading spin out of the pitcher’s hand helps a hitter identify:",
    options: [
      "The pitch count",
      "Defensive alignment",
      "Pitch type and movement",
      "The catcher’s signals",
    ],
    correctIndex: 2,
  },
  {
    id: 67,
    difficulty: "medium",
    prompt: "Falling behind 0–2, the hitter’s mindset should be to:",
    options: [
      "Swing as hard as possible",
      "Focus on contact and protect the zone",
      "Take the next pitch no matter what",
      "Step out for time",
    ],
    correctIndex: 1,
  },
  {
    id: 68,
    difficulty: "medium",
    prompt: "Facing a defensive shift, a good counter is to:",
    options: [
      "Swing harder to beat the shift",
      "Bunt or shoot the ball the other way",
      "Always pull the ball into the shift",
      "Ignore the defense entirely",
    ],
    correctIndex: 1,
  },
  {
    id: 69,
    difficulty: "medium",
    prompt: "What is the primary objective of time spent in the on-deck circle?",
    options: [
      "Stretch hamstrings only",
      "Track the pitcher’s timing and visualize the at-bat",
      "Chat with teammates",
      "Work on pickoff moves",
    ],
    correctIndex: 1,
  },
  {
    id: 70,
    difficulty: "medium",
    prompt: "When a baserunner is on third with less than two outs, the hitter should avoid:",
    options: [
      "Hitting the ball on the ground to a drawn-in infield",
      "Driving a fly ball to the outfield",
      "Taking a walk",
      "Fouling pitches off",
    ],
    correctIndex: 0,
  },
  {
    id: 71,
    difficulty: "medium",
    prompt: "On a bunt toward third with a runner on first, who typically covers third base?",
    options: ["Pitcher", "Shortstop", "Second baseman", "Catcher"],
    correctIndex: 1,
  },
  {
    id: 72,
    difficulty: "medium",
    prompt: "A cutoff play from right field to third base usually uses which infielder as the relay?",
    options: ["First baseman", "Second baseman", "Shortstop", "Third baseman"],
    correctIndex: 1,
  },
  {
    id: 73,
    difficulty: "medium",
    prompt: "With a runner on first, a ground ball to the right side should prompt the pitcher to:",
    options: [
      "Back up home plate",
      "Cover third base",
      "Cover first base in case of a throw",
      "Stay on the mound",
    ],
    correctIndex: 2,
  },
  {
    id: 74,
    difficulty: "medium",
    prompt: "On a base hit to the outfield with a runner trying to score, the cutoff man’s job is to:",
    options: [
      "Throw directly to the pitcher",
      "Align between the outfielder and the target base",
      "Chase the runner with the ball",
      "Stand on home plate",
    ],
    correctIndex: 1,
  },
  {
    id: 75,
    difficulty: "medium",
    prompt: "Middle infielders flash hand signals before a pitch primarily to:",
    options: [
      "Show off their gloves",
      "Coordinate coverage and responsibilities",
      "Distract the hitter",
      "Call pitches for the catcher",
    ],
    correctIndex: 1,
  },
  {
    id: 76,
    difficulty: "hard",
    prompt: "A player’s OPS+ is 130. What does it mean?",
    options: [
      "30% better than league average offensively",
      "30% worse than league average offensively",
      "Slugging percentage of 1.3",
      "On-base average of .130",
    ],
    correctIndex: 0,
  },
  {
    id: 77,
    difficulty: "hard",
    prompt: "What does FIP measure?",
    options: [
      "Pitcher’s performance independent of defense",
      "Batter’s slugging power",
      "Team fielding efficiency",
      "Infield position rating",
    ],
    correctIndex: 0,
  },
  {
    id: 78,
    difficulty: "hard",
    prompt: "True or False: BABIP stands for Batting Average on Balls In Play.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 79,
    difficulty: "hard",
    prompt: "What is a good average MLB OBP?",
    options: [".250", ".320", ".370", ".420"],
    correctIndex: 1,
  },
  {
    id: 80,
    difficulty: "hard",
    prompt: "True or False: WAR measures player value vs. a replacement-level player.",
    options: ["True", "False"],
    correctIndex: 0,
  },
  {
    id: 81,
    difficulty: "hard",
    prompt: "What statistic best predicts future on-base percentage?",
    options: ["Walk rate", "OPS", "BABIP", "Hard-hit rate"],
    correctIndex: 0,
  },
  {
    id: 82,
    difficulty: "hard",
    prompt: "What does wRC+ measure?",
    options: [
      "Runs created adjusted for park and league",
      "Catcher’s framing ability",
      "Pitcher’s strikeout rate",
      "Team chemistry rating",
    ],
    correctIndex: 0,
  },
  {
    id: 83,
    difficulty: "hard",
    prompt: "Which metric assigns specific weights to different offensive events to estimate run value?",
    options: ["OPS", "wOBA", "WHIP", "ERA"],
    correctIndex: 1,
  },
  {
    id: 84,
    difficulty: "hard",
    prompt: "Which stat helps evaluate a fielder’s total defensive impact relative to average?",
    options: ["OPS", "Defensive Runs Saved (DRS)", "wRC+", "FIP"],
    correctIndex: 1,
  },
  {
    id: 85,
    difficulty: "hard",
    prompt: "Which pitching metric adjusts ERA for ballpark and league factors?",
    options: ["ERA+", "WHIP", "K/BB ratio", "xwOBA"],
    correctIndex: 0,
  },
  {
    id: 86,
    difficulty: "hard",
    prompt: "WHIP stands for and measures:",
    options: [
      "Walks plus hits per inning pitched, indicating baserunners allowed",
      "Weighted home runs in play",
      "Win probability per inning pitched",
      "Walk rate of hitters",
    ],
    correctIndex: 0,
  },
  {
    id: 87,
    difficulty: "hard",
    prompt: "Leverage Index is used to evaluate:",
    options: [
      "Player salary value",
      "The pressure level of game situations",
      "Stadium seating capacity",
      "Bat weight regulations",
    ],
    correctIndex: 1,
  },
  {
    id: 88,
    difficulty: "hard",
    prompt: "A high barrel rate indicates:",
    options: [
      "Frequent bunting",
      "A high percentage of batted balls hit with ideal exit velocity and launch angle",
      "Low strikeout totals",
      "Defensive prowess",
    ],
    correctIndex: 1,
  },
  {
    id: 89,
    difficulty: "hard",
    prompt: "A fair batted ball strikes a runner in fair territory before passing an infielder (other than the pitcher). What is the ruling?",
    options: [
      "Ball stays live; play continues",
      "Runner is out for interference and the ball is dead",
      "Batter is out while the runner stays",
      "Play results in an automatic double play",
    ],
    correctIndex: 1,
  },
  {
    id: 90,
    difficulty: "hard",
    prompt: "A batter hits out of order and the mistake is appealed before the next pitch. What happens?",
    options: [
      "The play stands",
      "The proper batter is called out and the play is nullified",
      "Both batters are out",
      "The umpire issues a warning only",
    ],
    correctIndex: 1,
  },
  {
    id: 91,
    difficulty: "hard",
    prompt: "With two outs and the bases loaded, the catcher drops strike three but quickly steps on home plate. What is the result?",
    options: [
      "The run scores and the inning continues",
      "The batter is safe and play continues",
      "The third out is recorded on the force at home",
      "A balk is called on the catcher",
    ],
    correctIndex: 2,
  },
  {
    id: 92,
    difficulty: "hard",
    prompt: "A runner leaves third base early on a deep fly out and touches home. The defense appeals before the next pitch. Ruling?",
    options: [
      "Run counts",
      "Runner is out on appeal and the run is removed",
      "Runner automatically returns to third",
      "Umpire warns the runner only",
    ],
    correctIndex: 1,
  },
  {
    id: 93,
    difficulty: "hard",
    prompt: "Obstruction is called on a fielder impeding a runner while a play is being made on that runner. What is awarded?",
    options: [
      "Nothing; play continues",
      "Runner is out",
      "Runner is awarded at least one base (Type 1 obstruction)",
      "Batter is declared out",
    ],
    correctIndex: 2,
  },
  {
    id: 94,
    difficulty: "hard",
    prompt: "A pitcher is called for a balk but still throws out the runner attempting to steal. What is the ruling?",
    options: [
      "The out stands",
      "The runner chooses the outcome",
      "The balk nullifies the play and the runner advances one base",
      "The pitch is replayed with the same count",
    ],
    correctIndex: 2,
  },
  {
    id: 95,
    difficulty: "hard",
    prompt: "True or False: If a runner from third touches home before a force out is recorded for the third out, the run counts.",
    options: ["True", "False"],
    correctIndex: 1,
  },
  {
    id: 96,
    difficulty: "hard",
    prompt: "Catcher’s interference is called and the ball is put in play resulting in a base hit. The offensive manager may choose to:",
    options: [
      "Take the play or accept the interference award",
      "Only accept the interference award",
      "Only take the play",
      "Defer to the defensive manager’s choice",
    ],
    correctIndex: 0,
  },
  {
    id: 97,
    difficulty: "hard",
    prompt: "A manager makes a second mound visit in the same inning to the same pitcher. What must happen?",
    options: [
      "An automatic balk is called",
      "The pitcher must be replaced",
      "A warning is issued with no penalty",
      "The batter is awarded first base",
    ],
    correctIndex: 1,
  },
  {
    id: 98,
    difficulty: "hard",
    prompt: "In extra innings with the automatic runner placed on second base, that runner is officially credited with reaching via:",
    options: ["Walk", "Error", "Base hit", "Fielder’s choice"],
    correctIndex: 1,
  },
  {
    id: 99,
    difficulty: "hard",
    prompt: "A fielder throws a glove at a fair batted ball and makes contact. What is the penalty?",
    options: [
      "Ball is dead; batter is awarded a single",
      "Batter and runners are awarded three bases",
      "Batter and runners are awarded two bases",
      "No penalty; play continues",
    ],
    correctIndex: 1,
  },
  {
    id: 100,
    difficulty: "hard",
    prompt: "Under MLB’s three-batter minimum rule, a reliever must face at least:",
    options: [
      "One batter regardless of the inning",
      "Three batters or finish the inning",
      "Two batters unless the bases are loaded",
      "Whatever the catcher decides",
    ],
    correctIndex: 1,
  },
];

const QUESTIONS_PER_ROUND = 10;
const DIFFICULTY_MIX = {
  easy: 2,
  medium: 5,
  hard: 3,
};

const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("answer-options");
const feedbackEl = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const breakdownEl = document.getElementById("breakdown");

let roundQuestions = [];
let currentIndex = 0;
let currentScore = 0;
let selectedIndex = null;
let locked = false;
let perDifficultyScore = {
  easy: { correct: 0, total: 0 },
  medium: { correct: 0, total: 0 },
  hard: { correct: 0, total: 0 },
};

startButton.addEventListener("click", () => {
  startQuiz();
});

submitButton.addEventListener("click", () => {
  if (selectedIndex === null || locked) return;
  lockQuestion();
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 1 >= roundQuestions.length) {
    showResults();
  } else {
    currentIndex += 1;
    selectedIndex = null;
    locked = false;
    renderQuestion();
  }
});

restartButton.addEventListener("click", () => {
  startQuiz();
});

function startQuiz() {
  roundQuestions = buildRound();
  currentIndex = 0;
  currentScore = 0;
  selectedIndex = null;
  locked = false;
  perDifficultyScore = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 },
  };

  introSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  updateScoreDisplay();
  renderQuestion();
}

function buildRound() {
  const grouped = QUESTION_BANK.reduce((acc, question) => {
    acc[question.difficulty].push(question);
    return acc;
  }, { easy: [], medium: [], hard: [] });

  const selections = [];
  Object.entries(DIFFICULTY_MIX).forEach(([difficulty, count]) => {
    const shuffled = shuffle([...grouped[difficulty]]);
    selections.push(...shuffled.slice(0, count));
  });

  return shuffle(selections);
}

function renderQuestion() {
  const question = roundQuestions[currentIndex];
  const total = roundQuestions.length;

  questionCounter.textContent = `Question ${currentIndex + 1} of ${total}`;
  questionText.textContent = question.prompt;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("feedback--correct", "feedback--incorrect");

  optionsContainer.innerHTML = "";
  question.options.forEach((choice, index) => {
    const optionId = `option-${currentIndex}-${index}`;
    const optionWrapper = document.createElement("label");
    optionWrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(index);
    input.id = optionId;

    const choiceText = document.createElement("span");
    choiceText.textContent = choice;

    input.addEventListener("change", () => {
      selectedIndex = Number(input.value);
      submitButton.disabled = false;
      highlightSelected(index);
    });

    optionWrapper.append(input, choiceText);
    optionsContainer.append(optionWrapper);
  });

  submitButton.disabled = selectedIndex === null;
  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

function lockQuestion() {
  const question = roundQuestions[currentIndex];
  locked = true;
  const isCorrect = selectedIndex === question.correctIndex;
  perDifficultyScore[question.difficulty].total += 1;
  if (isCorrect) {
    currentScore += 1;
    perDifficultyScore[question.difficulty].correct += 1;
  }

  updateScoreDisplay();

  const optionElements = [...optionsContainer.querySelectorAll(".option")];
  optionElements.forEach((optionEl, index) => {
    const input = optionEl.querySelector("input");
    input.disabled = true;
    optionEl.classList.remove("option--selected");

    if (index === question.correctIndex) {
      optionEl.classList.add("feedback--correct");
    } else if (index === selectedIndex) {
      optionEl.classList.add("feedback--incorrect");
    }
  });

  feedbackEl.textContent = isCorrect
    ? "Correct! Nice read."
    : `Not quite. Correct answer: ${question.options[question.correctIndex]}.`;
  feedbackEl.classList.toggle("feedback--correct", isCorrect);
  feedbackEl.classList.toggle("feedback--incorrect", !isCorrect);

  submitButton.disabled = true;
  submitButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
}

function highlightSelected(selected) {
  const optionElements = [...optionsContainer.querySelectorAll(".option")];
  optionElements.forEach((optionEl, index) => {
    optionEl.classList.toggle("option--selected", index === selected);
  });
}

function showResults() {
  quizSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  finalScore.textContent = `You answered ${currentScore} out of ${roundQuestions.length} questions correctly.`;
  breakdownEl.innerHTML = "";

  Object.entries(DIFFICULTY_MIX).forEach(([difficulty, count]) => {
    const stats = perDifficultyScore[difficulty];
    breakdownEl.append(createStatLine(`${capitalize(difficulty)}: ${stats.correct}/${stats.total || count} correct`));
  });

  introSection.classList.add("hidden");
}

function createStatLine(text) {
  const line = document.createElement("div");
  line.textContent = text;
  return line;
}

function updateScoreDisplay() {
  scoreCounter.textContent = `Score: ${currentScore}`;
}

function shuffle(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Keep the intro visible on load.
quizSection.classList.add("hidden");
resultsSection.classList.add("hidden");
