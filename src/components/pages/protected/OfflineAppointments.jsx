import React, { useEffect, useState } from 'react';
import Wrapper from '../../Wrapper/wrapper';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../shared/Loading';
import axios from 'axios';
import { backend_url } from '../../../utils/Config';

const OfflineAppointments = () => {
  const [auth] = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (auth?.user && auth?.user?.user_Role === 'admin') {
        setIsLoading(false);
        toast.success('Authentication Successful');
      } else {
        navigate('/dashboard');
        toast.error('Authentication Failed');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [auth, navigate]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/appointments/offline/getAllAppointment`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        });
        setAppointments(res.data.data || []);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch appointments');
      }
    };

    if (!isLoading) {
      fetchAppointments();
    }
  }, [isLoading, auth?.token]);

  const handleAction = (appointmentId) => {
 navigate(`/updateOfflineAppointments/${appointmentId}`)
    // You can replace this with a modal or confirmation logic
  };

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <h2 className="text-2xl font-semibold mb-4">All Offline Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Start Date</th>
              <th className="px-4 py-2 border">End Date</th>
              <th className="px-4 py-2 border">Pincode</th>
              <th className="px-4 py-2 border">Confirmed</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id} className="text-center">
                <td className="px-4 py-2 border">{appt.userId}</td>
                <td className="px-4 py-2 border">{appt.startDate.slice(0, 10)}</td>
                <td className="px-4 py-2 border">{appt.endDate.slice(0, 10)}</td>
                <td className="px-4 py-2 border">{appt.pincode}</td>
                <td className="px-4 py-2 border">{appt.confirmation ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleAction(appt._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Take Action
                  </button>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default OfflineAppointments;
