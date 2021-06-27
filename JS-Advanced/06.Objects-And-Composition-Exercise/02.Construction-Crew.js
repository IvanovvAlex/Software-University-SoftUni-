function hydrateWorker(workerObject) {
    if (workerObject.dizziness) {
        workerObject.levelOfHydrated = workerObject.weight * 0.1 * workerObject.experience;
        workerObject.dizziness = false;
    }

    return workerObject;
}

let result = hydrateWorker({ weight: 80,
                experience: 1,
                levelOfHydrated: 0,
                dizziness: true });

console.log(result);