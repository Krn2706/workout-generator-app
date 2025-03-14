const exercises = [
    {
        "name": "Squats",
        "description": "Go down into a squat and back up again. Keep your back straight.",
        "equipment": ["Weights (optional)"],
        "duration": "3 sets of 10 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps. Can add weights to increase difficulty.",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleSquat"
    },
    {
        "name": "Push-ups",
        "description": "Keep your body straight and lower yourself to the ground.",
        "equipment": ["None"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "4",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["upper body"],
        "injuries": ["elbow"],
        "video_url": "https://www.youtube.com/watch?v=examplePushUp"
    },
    {
        "name": "Plank",
        "description": "Hold a straight plank for 30 seconds.",
        "equipment": ["Yoga mat (optional)"],
        "duration": "3 rounds",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 20 seconds, Medium - 30 seconds, Hard - 60 seconds",
        "training_type": ["circuit"],
        "training_form": ["strength"],
        "training_focus": ["core"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=examplePlank"
    },
    {
        "name": "Banded Shoulder Lateral Rotation",
        "description": "Stand in regular position, hold the band at the hip on opposite site, and rotate your arm out to the side.",
        "equipment": ["Band"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["upper body", "core"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=JD_11SQGuyI"
    },
    {
        "name": "Goblet Squat",
        "description": "Hold a weight close to your chest, squat down while keeping your chest up and knees behind your toes, then return to standing.",
        "equipment": ["Dumbbell", "Kettlebell"],
        "duration": "3 sets of 10-12 reps",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body"],
        "injuries": ["knees", "lower back"],
        "video_url": "https://www.youtube.com/watch?v=6xwGJpU7GGY"
    },
    {
        "name": "Banded Hip Adduction",
        "description": "Hold the band at the hip, and move your leg out to the side.",
        "equipment": ["Band"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["lower body"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleHipAdduction"
    },
    {
        "name": "Lunges",
        "description": "Stand in regular position, take a step forward with one leg, then lower yourself to the ground with the other leg.",
        "equipment": ["None"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body"],
        "injuries": ["knees", "lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleLunges"
    },
    {
        "name": "Russian Twists",
        "description": "Sit with your legs bent and lean back slightly. Twist your torso to each side, if chosen,while holding a weight.",
        "equipment": ["Weights", "None"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps. Can add weights to increase difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["core"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleRussianTwists"
    },
    {
        "name": "Leg Press",
        "description": "Sit on the leg press machine and push the platform away with your legs, keeping a controlled motion.",
        "equipment": ["Leg Press Machine"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps- Can increase resistance to increase difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body"],
        "injuries": ["knees", "lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleLegPress"
    },
    {
        "name": "Tricep Dips",
        "description": "Place your hands behind you on a bench or chair, lower your body by bending your elbows, then push back up.",
        "equipment": ["Bench", "Chair"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["upper body"],
        "injuries": ["elbow"],
        "video_url": "https://www.youtube.com/watch?v=exampleTricepDips"
    },
    {
        "name": "Side Plank",
        "description": "Lie on your side, lift your hips off the floor, and hold your body in a straight line.",
        "equipment": ["Yoga mat (optional)"],
        "duration": "3 rounds and each side",
        "estimated_time": "5",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 20 seconds, Medium - 30 seconds, Hard - 60 seconds",
        "training_type": ["circuit"],
        "training_form": ["strength"],
        "training_focus": ["core"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=exampleSidePlank"
    },
    {
        "name": "Banded Weak Side Hinge Hip Adduction",
        "description": "Hold the band in both hands and bend over. Make a strest from the bottom and up in a stretch ",
        "equipment": ["Band"],
        "duration": "3 sets of 8-12 reps on each side",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps. Can increase resistance to increase difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["core", "lower body"],
        "injuries": ["lower back"],
        "video_url": "https://www.youtube.com/watch?v=oefbupGEypE"
    },
    {
        "name": "Bulgarian DB Splitsquat Hold Into Sprint",
        "description": "Place one foot on a bench behind you, hold dumbbells or weights, and lower into a Bulgarian split squat. Hold the position for 3-6 seconds, then explode into a sprint forward.",
        "equipment": ["Dumbbells", "Bench"],
        "duration": "3 sets of 6-10 reps per leg",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - hold for 3 seconds and do 6 reps per leg, Medium - Hold for 4 seconds and do 8 reps per leg, Hard - hold for 6 seconds and do 10 reps per leg",
        "training_type": ["circuit", "traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body", "core"],
        "injuries": ["knees", "hips"],
        "video_url": "https://www.youtube.com/watch?v=edSV9Bedjog"
    },
    {
        "name": "Single Leg Banded Deadlift",
        "description": "Stand on one leg while holding a resistance band in one hand. Hinge at the hips, lowering your torso while extending the other leg behind you, then return to the starting position.",
        "equipment": ["Resistance Band"],
        "duration": "3 sets of 8-12 reps per leg",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps per leg, Medium - 10 reps per leg, Hard - 12 reps per leg, Can increase resistance to increase difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["lower body", "core"],
        "injuries": ["lower back", "ankles"],
        "video_url": "https://www.youtube.com/watch?v=aL14QjXDToE"
    },
    {
        "name": "Seated Landmine Rotation",
        "description": "Sit on the floor or bench with legs extended and hold the end of a barbell. Rotate the bar from side to side in a controlled motion, engaging the core throughout.",
        "equipment": ["Landmine", "Barbell", "Bench (optional)"],
        "duration": "3 sets of 10-16 reps per side",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 10 reps per side, Medium - 12 reps per side, Hard - 16 reps per side, Can increase weight for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["core", "upper body"],
        "injuries": ["lower back", "shoulders"],
        "video_url": "https://www.youtube.com/watch?v=p_GKWsTtPQ4"
    },
    {
        "name": "Seated Landmine Alternating Press",
        "description": "Sit on the floor or a bench with a straight posture. Hold the end of a landmine barbell with both hands at shoulder height. Press one side upward, then lower it in a controlled manner and switch sides.",
        "equipment": ["Landmine", "Barbell", "Bench (optional)"],
        "duration": "3 sets of 8-12 reps per side",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps per side, Medium - 10 reps per side, Hard - 12 reps per side, Can increase weight for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["upper body", "core"],
        "injuries": ["shoulders", "lower back"],
        "video_url": "https://www.youtube.com/watch?v=acutZzSa2ms"
    },
    {
        "name": "Lat Split Position Squat Rotation Into Pallof Press",
        "description": "Stand in a split squat position with a resistance band or cable machine at chest height. Rotate your torso towards the band while lowering into a squat, then return to the center and press the handle forward in a Pallof press motion.",
        "equipment": ["Resistance Band", "Cable Machine (optional)"],
        "duration": "3 sets of 8-12 reps per side",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps per side, Medium - 10 reps per side, Hard - 12 reps per side, Can increase resistance for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["core", "lower body", "shoulders"],
        "injuries": ["lower back", "knees", "shoulders"],
        "video_url": "https://www.youtube.com/watch?v=TJS4rWT_pfU"
    },
    {
        "name": "Lateral Band Strong Side Hip Rotation",
        "description": "Attach a resistance band at hip height and stand sideways to the anchor point. Engage your core and rotate your hips explosively against the band's resistance, then return to the starting position in a controlled manner.",
        "equipment": ["Resistance Band"],
        "duration": "3 sets of 10-15 reps per side",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 10 reps per side, Medium - 12 reps per side, Hard - 15 reps per side, Can increase band resistance for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance"],
        "training_focus": ["core", "hips"],
        "injuries": ["lower back", "hips"],
        "video_url": "https://www.youtube.com/watch?v=XzEvTtm70C0"
    },
    {
        "name": "Landmine Single Leg Lateral Lunge",
        "description": "Hold the end of a landmine barbell with both hands at chest height. Step laterally into a lunge position while keeping the other leg straight. Push back to the starting position, maintaining control and balance.",
        "equipment": ["Landmine", "Barbell"],
        "duration": "3 sets of 8-12 reps per side",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps per side, Medium - 10 reps per side, Hard - 12 reps per side, Can increase weight for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body", "core"],
        "injuries": ["knees", "hips"],
        "video_url": "https://www.youtube.com/watch?v=cTPbkXq5H4U"
    },
    {
        "name": "Strong Side Split Position Full ROM Heavy Band Pull Torso",
        "description": "Stand in a split squat position with a heavy resistance band anchored to your side. Hold the band with both hands and pull it across your torso while rotating your upper body, ensuring a full range of motion. Return to the starting position with control.",
        "equipment": ["Resistance Band"],
        "duration": "3 sets of 8-12 reps per side",
        "estimated_time": "8",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps per side, Medium - 10 reps per side, Hard - 12 reps per side, Can increase band resistance for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength", "balance", "mobility"],
        "training_focus": ["core", "hips", "upper body"],
        "injuries": ["lower back", "shoulders"],
        "video_url": "https://www.youtube.com/watch?v=ePwLeHLvEvc"
    },
    {
        "name": "Heel Elevated DB Squat",
        "description": "Place your heels on an elevated surface (such as a weight plate) while holding a dumbbell in each hand. Lower into a squat while keeping your torso upright, then drive through your heels to return to the standing position.",
        "equipment": ["Dumbbells", "Elevated Surface (e.g. weight plate)"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps, Can increase weight for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["lower body"],
        "injuries": ["knees", "lower back"],
        "video_url": "https://www.youtube.com/watch?v=kAgSKRnUyNU"
    },
    {
        "name": "Miniband Lateral Walk",
        "description": "Place a miniband around your legs just above your knees or at your ankles. Bend your knees slightly and walk sideways, keeping tension on the band throughout the movement. Maintain a controlled pace to focus on the glutes and hips.",
        "equipment": ["Miniband"],
        "duration": "3 sets of 15-20 steps per side",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 15 steps per side, Medium - 18 steps per side, Hard - 20 steps per side, Can increase resistance for higher difficulty",
        "training_type": ["circuit"],
        "training_form": ["strength", "balance"],
        "training_focus": ["lower body", "hips"],
        "injuries": ["knees", "hips"],
        "video_url": "https://www.youtube.com/watch?v=KfP0fbzIYl4"
    },
    {
        "name": "Banded Dumbbell Bent Over Row",
        "description": "Attach a resistance band to a stable surface and hold a dumbbell in each hand. Hinge at the hips, bending forward while keeping a flat back. Perform a row by pulling the dumbbells towards your torso, engaging your back muscles, and resisting the band's pull.",
        "equipment": ["Dumbbells", "Resistance Band"],
        "duration": "3 sets of 8-12 reps",
        "estimated_time": "6",
        "intensity": ["Low", "Medium", "Hard"],
        "intensity_variables": "Low - 8 reps, Medium - 10 reps, Hard - 12 reps, Can increase band resistance or weight for higher difficulty",
        "training_type": ["traditional"],
        "training_form": ["strength"],
        "training_focus": ["upper body", "back"],
        "injuries": ["lower back", "shoulders"],
        "video_url": "https://www.youtube.com/watch?v=2mrmN8OjGts"
    }
]; 