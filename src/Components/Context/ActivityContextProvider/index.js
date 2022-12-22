import React, { useState } from "react";
import ActivityContext from "../ActivityContext";
import { useEffect } from "react";
import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://jsd-backend-edited.vercel.app',
  withCredentials: true,
  validateStatus: () => true,
});

const ActivityContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

    //เพิ่ม/อัพเดตการ์ดactivity
    const addActivity = async (activity) => {
            await axios.put(`https://jsd-backend-edited.vercel.app/activity/${activity.id}`, activity);
            setShouldUpdate(true)
    }

    //ลบการ์ดactivity
    const removeActivity = async (id) => {
            await axios.delete(`https://jsd-backend-edited.vercel.app/activity/${id}`);
            setShouldUpdate(true)
    }

  const [runDuration, setRunDuration] = useState([]);
  const [walkDuration, setWalkDuration] = useState([]);
  const [swimmingDuration, setSwimmingDuration] = useState([]);
  const [bicyclerideDuration, setBicyclerideDuration] = useState([]);
  const [hikingDuration, setHikingDuration] = useState([]);

    //อัพเดทกราฟพาย
    const activitiesDuration = async () => {
      const run = await axios.get('https://jsd-backend-edited.vercel.app/activity/run');
      setRunDuration(run.data)
      const walk = await axios.get('https://jsd-backend-edited.vercel.app/activity/walk');
      setWalkDuration(walk.data)
      const swimming = await axios.get('https://jsd-backend-edited.vercel.app/activity/swimming');
      setSwimmingDuration(swimming.data)
      const bicycleride = await axios.get('https://jsd-backend-edited.vercel.app/activity/bicycleride');
      setBicyclerideDuration(bicycleride.data)
      const hiking = await axios.get('https://jsd-backend-edited.vercel.app/activity/hiking');
      setHikingDuration(hiking.data)
    }

  const [shouldUpdate, setShouldUpdate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (shouldUpdate) {
      setShouldUpdate(false);
      setIsLoading(true);
      async function getActivityCard() {
        try {
          const activity = await axios.get('https://jsd-backend-edited.vercel.app/activity');
          setActivities(activity.data)
          activitiesDuration()
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      }
      getActivityCard();
    }
  }, [shouldUpdate]);

  return (
    <ActivityContext.Provider
      value={{
        activities,
        setActivities,
        addActivity,
        isLoading,
        setShouldUpdate,
        removeActivity,
        runDuration,
        walkDuration,
        swimmingDuration,
        bicyclerideDuration,
        hikingDuration,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
