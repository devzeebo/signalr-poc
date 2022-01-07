using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalR.Poc.WebApi
{
    public interface ISignalRHub
    {
        Task SendMessage<T>(string type, T payload);
    }

    public class RawHub : Hub
    {
        public Task SendMessage(object payload)
        {
            return Clients.All.SendAsync("messageReceived", payload);
        }
    }

    public class SignalRHub : ISignalRHub
    {
        public class Message<T>
        {
            public string Type { get; set; }
            public T Payload { get; set; }
        }

        readonly IHubContext<RawHub> _hub;

        public SignalRHub(IHubContext<RawHub> hub)
        {
            _hub = hub;
        }

        public Task SendMessage<T>(string type, T payload)
        {
            return _hub.Clients.All.SendAsync("messageReceived", new Message<T>
            {
                Type = type,
                Payload = payload
            });
        }
    }
}