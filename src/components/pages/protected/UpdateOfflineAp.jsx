import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { backend_url } from '../../../utils/Config';
import { useAuth } from '../../../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateOfflineAp = () => {
  const { appointmentId } = useParams();
  const [auth] = useAuth();
  const navigate = useNavigate();

  const [finalDate, setFinalDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!finalDate || !location) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.put(
        `${backend_url}/api/v1/appointments/offline/updateAppointment/${appointmentId}`,
        {
          finalDate: finalDate,
          location,
        },
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success(res.data.message || 'Appointment updated successfully');
      navigate('/admin/offline-appointments'); // Redirect after success
    } catch (error) {
      console.error(error);
      toast.error('Failed to update appointment');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Update Offline Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Final Date</label>
          <input
            type="date"
            value={finalDate}
            onChange={(e) => setFinalDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default UpdateOfflineAp;
