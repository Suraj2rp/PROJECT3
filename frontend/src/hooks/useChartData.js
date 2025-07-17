import { useEffect, useState } from "react";

function useChartData(url) {
  const [data, setData] = useState({ labels: [], dataValues: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData({
          labels: json.labels,
          dataValues: json.values,
        });
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useChartData;
