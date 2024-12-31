interface AnimalData {
  [animal: string]: {
  [problem: string]: string | string[];
  };
}

export const animalData = {
  Dog: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Carefully inspect your dog's skin for signs of redness, swelling, rashes, bumps, lumps, or any abnormalities. Look for evidence of fleas, ticks, or other parasites.",
        "Step 2: Try to identify any potential causes of the skin problem, such as recent changes in diet, exposure to new substances, or contact with irritants.",
        "Step 3: Clean the affected area with a mild, pet-safe shampoo or a gentle cleanser recommended by your veterinarian. Avoid using human shampoos, as they may contain ingredients that are harmful to dogs.",
        "Step 4: Prevent your dog from licking or scratching the affected area excessively, as this can worsen the condition. Consider using an Elizabethan collar if necessary.",
        "Step 5: If the skin problem persists, worsens, or if you are unsure of the cause, seek professional veterinary advice. Your veterinarian can perform a thorough examination, conduct tests if necessary, and prescribe appropriate medications or treatments."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: If the dog is conscious and alert, gently restrain it to prevent further injury to itself or to you. Use a leash, belt, or other materials available.. ",
        "Step 3: Even a normally friendly dog may bite when in pain. If possible, use a soft fabric, such as a bandage or cloth, to create a makeshift muzzle. Ensure it allows the dog to breathe comfortably.",
        "Step 4: Identify and control any bleeding. Apply direct pressure with a clean cloth, gauze, or your hand. Elevate the wounded area if possible, but avoid elevating if it causes more pain.",
         "Step 5: If there are foreign objects in the wound, do not attempt to remove them. Clean around the wound with mild soap and water or a saline solution. Avoid using hydrogen peroxide or alcohol as they can be irritating.",
        "Step 6: Apply a pet-safe antiseptic or antibiotic ointment to the wound to help prevent infection.",
        "Step 7: Use a clean bandage or gauze to cover the wound. Secure it in place with a bandage or tape. Ensure it's not too tight to impede circulation.",
        "Step 8: Contact your veterinarian or emergency animal clinic for guidance and let them know you are on your way."]
      },
      {
        name: "New Born",
        content: ["Step 1: Keep the puppy in a warm and draft-free area. Use a cozy bed or blanket to provide comfort.",
        "Step 2: Always have fresh water available for the puppy. Monitor water intake to ensure they stay adequately hydrated.",
        "Step 3: Establish a regular feeding schedule and monitor the puppy's weight to ensure proper growth.",
        "Step 4: Watch for any signs of illness, discomfort, or abnormal behavior. If you notice anything concerning, consult your veterinarian.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Watch for signs of distress such as vomiting, diarrhea, lethargy, bloated abdomen, excessive drooling, or difficulty breathing.",
        "Step 2: It may be advisable to withhold food for 12-24 hours, allowing the dog's stomach to settle. However, consult with your vet before making this decision.",
        "Step 3: Ensure your dog has access to clean, fresh water. Dehydration can be a concern with vomiting and diarrhea, so encourage your dog to drink but don't force it.",
        "Step 4: Do not administer any over-the-counter medications without consulting your veterinarian first, as some human medications can be toxic to dogs.",
        "Step 5: Call your veterinarian or emergency veterinary clinic immediately for guidance. Provide as much information as possible about your dog's symptoms and any recent changes in diet or environment."]
      },
    ]
  },

  Cat: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Approach the cat calmly and speak in a soothing tone. Cats may become frightened or aggressive when in pain.",
        "Step 2: Keep the cat as still as possible to prevent further injury. If the cat is willing, gently place it in a carrier or a secure, well-padded box for transport.",
        "Step 3: If possible, you can provide support to the broken limb by gently splinting it. Use a rigid material like a piece of cardboard or rolled-up newspaper, making sure not to put pressure directly on the injured area.",
        "Step 4: Immediately take the cat to the veterinarian. Call ahead to let them know you're coming, so they can be prepared for the arrival of an injured animal.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.Carefully examine the affected area of the cat's skin. Look for signs of redness, swelling, cuts, abrasions, lumps, or any discharge.",
        "Step 2: Gently clean the affected area with a mild, pet-safe antiseptic solution. You can use a clean, damp cloth or cotton ball for this purpose. Identify and remove any potential irritants, such as chemicals, plants, or substances that may have come into contact with the cat's skin. ",
        "Step 3: If possible, prevent the cat from excessively licking or scratching the affected area. You may use a cone (Elizabethan collar) to prevent them from reaching the spot.",
        "Step 4: Work with your veterinarian to identify and address any underlying causes of the skin problem. This may involve allergy testing, dietary changes, or other diagnostic measures.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the cat calmly and speak to them in a soothing tone. Cats can sense stress, and staying calm helps to keep them relaxed.",
        "Step 2: If the wound is causing pain or distress, consider using a soft towel or blanket to gently restrain the cat, especially if you need to examine or clean the wound. ",
        "Step 3: Carefully examine the wound to determine its size, depth, and if there are any foreign objects lodged in it. Be cautious, as even a usually calm cat may react defensively when in pain. Wash your hands thoroughly before handling the wound to avoid introducing bacteria.",
        "Step 4: If the wound is dirty, gently clean it with mild, lukewarm saline solution or an antiseptic solution recommended by your veterinarian. Avoid using hydrogen peroxide or alcohol, as they can be too harsh and may delay healing.If there is bleeding, apply gentle pressure with a clean cloth or sterile gauze pad. Elevate the wound if possible to help reduce blood flow.",
        "Step 5: If the wound is in an area where a bandage can be applied and the cat will tolerate it, carefully wrap the wound with a sterile bandage. Be sure not to make it too tight. ",
        "Step 6: If your cat seems to be in pain, discuss with your veterinarian the possibility of pain management options appropriate for feline use."]
      },
      {
        name: "New Born",
        content: ["Step 1: Keep the kitten in a warm, quiet, and safe place. Use a comfortable bed or blanket to provide warmth.",
        "Step 2: If the mother cat is not present or unable to nurse, consult with a veterinarian for guidance on a suitable milk replacement formula. Feed the kitten using a small bottle or syringe, following the recommended feeding schedule.",
        "Step 3:Newborn kittens require frequent feedings, usually every 2-4 hours. As they grow, the feeding frequency can be gradually reduced.",
        "Step 4: Gently stimulate the kitten's genital area with a soft cloth after each feeding to mimic the mother's grooming behavior and encourage elimination.",
        "step 5: Newborn kittens cannot regulate their body temperature well. Ensure they are kept in a warm environment (around 85-90°F or 29-32°C) until they are about 3 weeks old.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Withhold food for 12-24 hours to give the cat's stomach a chance to settle. However, consult with a vet before making such decisions, as some conditions may require different approaches.",
        "Step 2: Ensure the cat has access to fresh water. If dehydration is a concern, try to encourage the cat to drink small amounts of water at a time.",
        "Step 3: Do not administer over-the-counter medications without consulting your veterinarian, as some human medications can be toxic to cats.",
        "Step 4: Contact your veterinarian as soon as possible. Stomach infections can be caused by various factors, including bacteria, viruses, or parasites, and the appropriate treatment will depend on the underlying cause.",]
      },
    ]
  },

  Cow: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Cows can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the cow calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the cow to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected cow from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the cow from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the cow appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the cow and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the cow to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the calf with colostrum, the first milk produced by the mother cow. Colostrum is rich in antibodies and essential nutrients crucial for the calf's immune system. Ensure the calf receives colostrum within the first few hours of birth.",
        "Step 2: If the calf is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Calves generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the calf has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the cow from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the cow has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the cow's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the cow is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Bird: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Move slowly and calmly to avoid causing additional stress to the bird. Limit handling to reduce stress and potential exacerbation of the injury",
        "Step 2:Use a small, well-ventilated container or carrier lined with a soft, non-abrasive material such as a towel or cloth. Ensure the container is secure to prevent further injury.",
        "Step 3: Place the container in a warm and quiet area to help keep the bird calm and maintain its body temperature.",
        "Step 4: It's essential not to try to set the broken bone yourself, as this can cause further harm. Leave the assessment and treatment to a qualified avian veterinarian.",
        "Step 5: Minimize the bird's movement to prevent further injury. If possible, avoid any sudden or jarring movements during transportation.",
        "Step 7: If the bird has a broken wing, gently support the wing against its body during transportation."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: If you have multiple birds, isolate the one with the skin problem to prevent the spread of any potential contagious condition.",
        "Step 2: Examine the affected area carefully. Note any signs of redness, swelling, discharge, feather loss, or abnormalities. ",
        "Step 3: If necessary, gently restrain the bird to prevent further injury or self-harm. Use a soft towel or cloth to wrap around the bird, being careful not to stress it further.",
        "Step 4: Refrain from applying any topical treatments or medications without veterinary guidance. Some substances may be harmful to birds.",
        "Step 5: Take note of any changes in the bird's behavior, appetite, or other symptoms. This information can be helpful for the veterinarian's assessment.",
        "Step 6: Refrain from attempting to diagnose or treat the skin problem on your own. Birds can have various skin conditions, and a professional diagnosis is crucial."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the bird slowly and calmly to avoid causing additional stress. If you must handle the bird, use gloves to protect yourself from potential bites or scratches. Keep in mind that some birds may carry diseases.",
        "Step 2: Gently place the injured bird in a well-ventilated and secure container, such as a cardboard box with air holes or a pet carrier. Line the container with a soft cloth or paper towels. Place the container in a warm, quiet, and dark place. This helps reduce stress for the bird.",
        "Step 3: Do not attempt to force-feed the bird. Allow it to rest and recover. If the bird appears alert and able to drink, provide a shallow dish of water. Do not force the bird to drink.",
        "Step 4: Unless you have specific training in bird rehabilitation, it's best to leave the care of the bird to professionals.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Identify whether the bird is a nestling (still in the nest) or a fledgling (has left the nest but is not fully independent). This information will help guide your care.",
        "Step 2: If the bird is a fledgling, observe it from a distance. Many fledglings are learning to fly and are still under the care of their parents. Interfering unnecessarily can disrupt this natural process.",
        "Step 3: If the bird is in immediate danger (e.g., from predators, traffic, pets), gently move it to a safer location nearby.",
        "Step 4: If you find a nestling, try to return it to its nest. If the nest has fallen, you can fashion a makeshift nest using a small container (e.g., a margarine tub) lined with soft materials. Do not attempt to feed the bird without proper guidance, as their dietary needs vary based on species.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If you have multiple birds, isolate the affected bird to prevent the potential spread of infection. Place the bird in a quiet, warm, and draft-free area. Ensure it has access to a comfortable perch and a nesting box.",
        "Step 2: Ensure the bird has access to clean and fresh water. Proper hydration is crucial for birds, especially when dealing with illnesses.",
        "Step 3: Monitor the bird's behavior closely. Take note of any changes in eating habits, droppings, or signs of distress.",
        "Step 4: Refrain from administering any over-the-counter medications or antibiotics without the guidance of a veterinarian. Improper use of medications can be harmful to birds.",
        "Step 5: If the bird appears cold or is showing signs of lethargy, provide additional warmth. Use a heat lamp or a heating pad set on low, making sure there is a cooler area for the bird to move to if needed.",
        "Step 6: Consult with a veterinarian for appropriate dietary recommendations. In some cases, a vet may recommend a specific diet or supplements to support the bird's recovery.",
        "Step 7: Keep the bird warm, especially if it is a nestling. Use a heating pad set on low or a warm water bottle wrapped in a cloth. Place it in a box with the bird, ensuring that the bird can move away from the heat source if needed.",
        "Step 8: If the bird is a fledgling, and it is safe to do so, you can place it on a nearby branch or elevated surface to facilitate a potential reunion with its parents."]
      },
    ]
  },

  Goat: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Goats can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the Goat calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the Goat to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected Goat from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the Goat from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the Goat appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the Goat and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the Goat to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the baby goat with colostrum, the first milk produced by the mother Goat. Colostrum is rich in antibodies and essential nutrients crucial for the goat's immune system. Ensure the baby goat receives colostrum within the first few hours of birth.",
        "Step 2: If the baby is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Baby Goats generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the goat has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the Goat from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the Goat has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the Goat's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the Goat is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Sheep: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Sheeps can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the Sheep calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the Sheep to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected Sheep from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the Sheep from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the Sheep appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the Sheep and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the Sheep to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the Baby Sheep with colostrum, the first milk produced by the mother Sheep. Colostrum is rich in antibodies and essential nutrients crucial for the Baby Sheep's immune system. Ensure the Baby Sheep receives colostrum within the first few hours of birth.",
        "Step 2: If the Baby Sheep is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Baby Sheep generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the Baby Sheep has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the Sheep from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the Sheep has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the Sheep's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the Goat is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Monkey: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Prioritize your safety and avoid approaching the monkey directly, especially if it's a wild or unfamiliar animal. Wild monkeys can be unpredictable and may react defensively when injured.",
        "Step 2:Maintain a safe distance to prevent further stress to the monkey and reduce the risk of injury to yourself. If the injured monkey is in a public area or belongs to a wildlife sanctuary or zoo, contact the appropriate authorities, such as animal control or wildlife rescue services. ",
        "Step 3: Avoid getting too close to the monkey, especially if it appears agitated or distressed. Injured animals may react defensively, and a monkey with a broken bone may be in pain.",
        "Step 4: Refrain from attempting to immobilize or treat the broken bone directly, as this may cause further harm to the animal. Avoid giving food or water to the injured monkey unless advised to do so by a professional. In some cases, the monkey may require fasting before veterinary examination or treatment.",
        "Step 5: If you need to contact professional help, be prepared to provide information about the monkey's location, behavior, and any visible injuries. This will assist rescuers in assessing the situation."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Avoid direct contact with the monkey to minimize stress and potential risks. Observe the skin problem from a safe distance.",
        "Step 2:If the monkey is part of a group, consider isolating it to prevent the spread of any potential contagious skin conditions.",
        "Step 3: Refrain from attempting to diagnose or treat the skin problem without professional guidance. Monkey skin conditions can have various causes, including infections, allergies, or parasites.",
        "Step 4: Ensure the monkey's living area is clean, well-ventilated, and free from potential irritants. Maintain an appropriate temperature and humidity level.",
        "Step 5: Ensure the monkey is receiving a balanced and nutritious diet to support overall health and potential healing.",
        "Step 6: Avoid applying any ointments, creams, or medications without professional guidance, as some substances may be harmful. If the monkey is scratching or exhibiting self-harming behavior, consult with the veterinarian for advice on preventing further injury."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the wounded monkey with extreme caution. Keep a safe distance to avoid potential aggression or bites. Avoid direct contact with the wounded monkey unless you have the necessary training and protective gear. Injured or distressed animals can be unpredictable and may become aggressive.",
        "Step 2:Maintain a calm and quiet environment. Excessive noise and stress can exacerbate the monkey's condition. ",
        "Step 3: Avoid attempting to treat the wound yourself. Applying first aid without proper knowledge and protective measures may result in injury or disease transmission.",
        "Step 4: If you need to contain the monkey, use barriers such as nets or cages designed for wildlife capture. Do not attempt to handle the monkey directly.",
        "Step 5: When professional help arrives, provide information about the monkey's behavior, the nature of the wound, and any other relevant details."]
      },
      {
        name: "New Born",
        content: ["Step 1:In many places, it is illegal to keep monkeys as pets without the proper permits. Contact local wildlife authorities or a licensed wildlife rehabilitator immediately for guidance.",
        "Step 2: Monkeys have complex social and dietary needs that are challenging to meet in a home setting. Raising a monkey as a pet can lead to behavioral and health issues for the animal.",
        "Step 3: If you encounter a baby monkey in the wild, keep a safe distance and observe from afar. The mother may be nearby, and human interference can cause more harm.",
        "Step 4: If the baby monkey appears to be abandoned and in distress, provide a warm, quiet environment. Use a soft cloth or blanket to create a nest-like space.",
        "Step 5: Refrain from feeding the monkey without proper guidance. Monkeys have specific dietary needs that are challenging to replicate without expert knowledge."]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1:Monitor the monkey for signs of a stomach infection, such as changes in appetite, diarrhea, vomiting, lethargy, or abdominal discomfort.",
        "Step 2: If the monkey lives in a group, consider isolating the affected individual to prevent the potential spread of infection. Ensure the monkey has access to clean and fresh water to prevent dehydration. ",
        "Step 3: If the monkey is experiencing diarrhea, take precautions to isolate and dispose of feces properly to prevent the spread of infection.",
        "Step 4: Practice good hygiene when handling the monkey, and wash hands thoroughly before and after any contact. Minimize stressors, such as loud noises or frequent handling, to help the monkey recover.",
        "Step 5: Refrain from feeding the monkey without proper guidance. Monkeys have specific dietary needs that are challenging to replicate without expert knowledge."]
      },
    ]
  },

  Elephant: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure the safety of both the elephant and anyone nearby by securing the area. Keep bystanders and other animals at a safe distance.",
        "Step 2: Limit the elephant's movement as much as possible. Restricting its mobility helps prevent further injury and reduces the risk of aggravating the broken bone.",
        "Step 3: Keep the elephant as calm and stress-free as possible. Reducing stress can help in managing pain and preventing additional complications.",
        "Step 4: Contact a veterinarian with experience in treating large animals, particularly elephants. Emergency veterinary services may be required.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: If the skin problem is suspected to be contagious, isolate the elephant from other elephants to prevent the potential spread of the issue.",
        "Step 2: If the skin problem involves wounds or lesions, gently clean the affected areas with a mild antiseptic solution, as recommended by a veterinarian. ",
        "Step 3: Avoid using harsh chemicals, soaps, or substances that could potentially worsen the skin problem or cause irritation.",
        "Step 4: Ensure the elephant has access to shade and a comfortable environment. Environmental stressors can impact skin health.",
        "Step 5: Observe the elephant for signs of discomfort, including changes in behavior, decreased appetite, or increased aggression. Report any concerning observations to the veterinarian.",
        "Step 6: Refrain from applying any medications or ointments to the elephant's skin without guidance from a veterinarian. Some substances may be harmful or inappropriate for elephant skin."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Elephants are wild animals and can be unpredictable, especially if they are injured or in pain. Maintain a safe distance to avoid further stressing the animal or putting yourself at risk.",
        "Step 2: Assess the elephant's condition from a distance. Note any signs of distress, bleeding, or visible injuries. Refrain from approaching the wounded elephant. Wild elephants may perceive humans as a threat, and a wounded animal may be more agitated or defensive.",
        "Step 3: Call local wildlife authorities, conservation organizations, or a wildlife veterinarian to report the injured elephant. Provide them with as much information as possible about the elephant's location and condition.",]
      },

      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, isolate the elephant from other animals to prevent the spread of infection.",
        "Step 2: Immediately contact a veterinarian who specializes in large animals and, preferably, elephants. Provide them with detailed information about the elephant's symptoms and behavior.",
        "Step 3: Ensure the elephant has access to clean, fresh water. Hydration is crucial for the overall well-being of the animal.",
        "Step 4: Do not administer any medications without the explicit guidance of a veterinarian. The anatomy and physiology of elephants are unique, and medications suitable for other animals may not be appropriate.",
        "Step 5: If the elephant's condition requires transportation to a veterinary facility, ensure that the transport vehicle is suitable for large animals and that the journey is as stress-free as possible.",
        "Step 6: Comply with the veterinarian's instructions regarding medication, treatment, and care. Follow-up appointments and ongoing monitoring may be necessary."]
      },
    ]
  },

  Pig: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Assess the pig's overall condition and the severity of the injury from a safe distance. Be cautious, as injured pigs can be stressed and may act defensively.",
        "Step 2: Minimize the pig's movement to prevent further injury. If possible, confine the pig in a safe and quiet area.",
        "Step 3: Keep the environment calm and quiet to reduce stress on the injured pig. Stress can exacerbate the animal's condition.",
        "Step 4: Do not attempt to set the broken bone unless you have specific training in veterinary care. Incorrectly manipulating the bone can lead to additional harm.",]
      },

      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Pigs can be strong and unpredictable. If the pig is distressed or in pain, approach with caution.",
        "Step 2: Carefully examine the wound to assess its severity. Look for signs of bleeding, infection, or foreign objects. ",
        "Step 3: If there is active bleeding, apply gentle pressure with a clean cloth or bandage to control it. Elevate the wounded area if possible, but avoid causing additional stress to the pig.",
        "Step 4: Clean the wound with a mild antiseptic solution, such as diluted chlorhexidine or saline solution.",]
      },

      {
        name: "Stomach Infection",
        content: ["Step 1: Separate the affected pig from the rest of the herd to prevent the potential spread of infection.",
        "Step 2: Monitor the pig for symptoms of a stomach infection, such as changes in appetite, lethargy, diarrhea, or vomiting. ",
        "Step 3: Ensure the pig has access to clean, fresh water at all times. Dehydration is a common concern with stomach infections.",
        "Step 4: Seek immediate veterinary attention for a proper diagnosis. Only a veterinarian can accurately determine the cause of the stomach infection and recommend appropriate treatment.",]
      },
    ]
  },

  Rabbit: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Approach the rabbit calmly and quietly. Stress can exacerbate the situation.",
        "Step 2: Keep the rabbit as still as possible to prevent further injury. If the rabbit is in a location where it could move around and worsen the injury, try to gently confine it to a small, safe area.",
        "Step 3: Approach the rabbit gently and avoid putting pressure on the injured area. Use a towel or blanket to carefully pick up the rabbit, supporting its body and minimizing movement.",
        "Step 4:If you can identify the broken limb, consider immobilizing it. You can use a splint or wrap soft padding (such as cotton or gauze) around the limb to stabilize it.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: If you have multiple rabbits, consider isolating the one with the skin problem to prevent potential spread.",
        "Step 2: Take note of any specific symptoms such as hair loss, redness, swelling, lesions, or changes in behavior. ",
        "Step 3: Keep the rabbit's living area clean and dry. Remove any soiled bedding and ensure good hygiene to prevent the exacerbation of skin issues.",
        "Step 4: Do not attempt to apply over-the-counter medications without consulting a veterinarian. Rabbits have sensitive skin, and some substances may be harmful.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the rabbit calmly and speak softly to avoid causing additional stress.",
        "Step 2: If the rabbit is frightened or in pain, you may need to carefully and gently restrain it to prevent further injury. Be cautious not to cause additional stress.",
        "Step 3: Examine the wound visually, but avoid touching or probing it excessively, as this may cause further distress.",
        "Step 4: If there is bleeding, try to control it by applying gentle pressure with a clean cloth or sterile gauze. Be careful not to cause additional trauma.",]
      }
    ]
  },

  Squirrel: {
    problems:[
      {
        name: "Broken Bone",
        content: ["Step 1: Approach the Squirrel calmly and quietly. Stress can exacerbate the situation.",
        "Step 2: Keep the Squirrel as still as possible to prevent further injury. If the Squirrel is in a location where it could move around and worsen the injury, try to gently confine it to a small, safe area.",
        "Step 3: Approach the Squirrel gently and avoid putting pressure on the injured area. Use a towel or blanket to carefully pick up the Squirrel, supporting its body and minimizing movement.",
        "Step 4:If you can identify the broken limb, consider immobilizing it. You can use a splint or wrap soft padding (such as cotton or gauze) around the limb to stabilize it.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: If you have multiple Squirrels, consider isolating the one with the skin problem to prevent potential spread.",
        "Step 2: Take note of any specific symptoms such as hair loss, redness, swelling, lesions, or changes in behavior. ",
        "Step 3: Keep the Squirrel's living area clean and dry. Remove any soiled bedding and ensure good hygiene to prevent the exacerbation of skin issues.",
        "Step 4: Do not attempt to apply over-the-counter medications without consulting a veterinarian. Squirrels have sensitive skin, and some substances may be harmful.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the Squirrel calmly and speak softly to avoid causing additional stress.",
        "Step 2: If the Squirrel is frightened or in pain, you may need to carefully and gently restrain it to prevent further injury. Be cautious not to cause additional stress.",
        "Step 3: Examine the wound visually, but avoid touching or probing it excessively, as this may cause further distress.",
        "Step 4: If there is bleeding, try to control it by applying gentle pressure with a clean cloth or sterile gauze. Be careful not to cause additional trauma.",]
      }
    ]
  },
}